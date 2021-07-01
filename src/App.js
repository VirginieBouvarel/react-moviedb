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
  const [bookmarks, setBookmarks] = useState([]);
  const [selection, setSelection] = useState(false);
  const [idSelected, setIdSelected] = useState();



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

  const [searchKeywords, setSearchKeywords] = useState('');
  const [searchResults, setSearchResults] = useState();

  const resultsHandler = (results, keywords) => {
    setSearchResults(results);
    setSearchKeywords(keywords);
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
            id={idSelected}
            bookmarks={bookmarks}
            onAddBookmark={createBookmarkHandler}
            onDeleteBookmark={removeBookmarkHandler}
            onBack={backHandler}
          />
        ) : (
          <Home
            searchKeywords={searchKeywords}
            searchResults={searchResults}
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
