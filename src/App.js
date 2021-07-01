import React, { useState, useEffect } from 'react';
import firebase from './utils/firebase-config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import BookmarksList from './components/Bookmark/BookmarksList';

library.add(faArrowLeft, faStar);


function App() {
  const [movies, setMovies] = useState();
  const [keywords, setKeywords] = useState('');
  const [selection, setSelection] = useState(false);
  const [idSelected, setIdSelected] = useState();
  const [bookmarks, setBookmarks] = useState([]);

  // Affichage des favoris
  useEffect(() => {
    const bookmarksDb = firebase.database().ref('bookmarks');

    bookmarksDb.on('value', snapshot => {
      let previousBookmarks = snapshot.val();

      let formatedBookmarks = [];
      for (let key in previousBookmarks) {
        formatedBookmarks.push({ key, ...previousBookmarks[key] });
      }
      setBookmarks(formatedBookmarks);
    })
  }, []);

  // Création d'un favoris
  const createBookmarkHandler = (movie) => {
    for (let item of bookmarks) {
      if (item.id === movie.id) return;
    }
    firebase.database().ref('bookmarks').push(movie);
  }

  const removeBookmarkHandler = (id) => {
    const bookmarkToDelete = bookmarks.filter(bookmark => bookmark.id === id);
    firebase.database().ref('bookmarks').child(bookmarkToDelete[0].key).remove();
  }

  const resultsHandler = (results, keywords) => {
    setMovies(results);
    setKeywords(keywords);
  }

  const selectHandler = (id) => {
    setSelection(true);
    setIdSelected(id);
  };

  const backHandler = () => {
    setSelection(false);
  };

  return (
    <>
      <Header />
      <BookmarksList bookmarks={bookmarks} />

      <main>
        {selection ? (
          <MovieDetails
            bookmarks={bookmarks}
            onAddBookmark={createBookmarkHandler}
            onDeleteBookmark={removeBookmarkHandler}
            id={idSelected}
            onBack={backHandler}
          />
        ) : (
          <Home
            movies={movies}
            keywords={keywords}
            onResults={resultsHandler}
            onSelect={selectHandler}
          />
        )}

      </main>

      <Footer />
    </>
  );
}

export default App;
