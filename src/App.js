import React, { useState } from 'react';
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


  const createBookmarkHandler = (movie) => {
    const bookmarksDB = firebase.database().ref('bookmarks');

    const bookmark = {
      average: movie.average,
      posterUrl: movie.posterUrl,
      release: movie.release,
      summary: movie.summary,
      title: movie.title,
    }
    bookmarksDB.push(bookmark);
  }

  const removeBookmarkHandler = (id) => {
    console.log(`Movie to delete = ${id}`);
    // const bookmarkToDelete = firebase.database().ref('bookmarks').child(id);
    // bookmarkToDelete.remove();
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
      <BookmarksList />

      <main>
        {!selection && (
          <Home
            movies={movies}
            keywords={keywords}
            onResults={resultsHandler}
            onSelect={selectHandler}
          />
        )}
        {selection && (
          <MovieDetails
            onAddBookmark={createBookmarkHandler}
            onDeleteBookmark={removeBookmarkHandler}
            id={idSelected}
            onBack={backHandler}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
