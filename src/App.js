import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayMoviesResults, selectMovie } from './features/bookmarks/bookmarks-slice';
import { addBookmark, deleteBookmark, fetchBookmarks } from './features/bookmarks/bookmarks-actions'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import BookmarksList from './features/bookmarks/BookmarksList';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';


library.add(faArrowLeft, faStar);


function App() {
  const [selection, setSelection] = useState(false);

  const dispatch = useDispatch();
  const keywords = useSelector(state => state.searchKeywords);
  const results = useSelector(state => state.searchResults);
  const movieSelectedId = useSelector(state => state.idSelected);
  const bookmarks = useSelector(state => state.bookmarksArray);


  useEffect(() => {
    dispatch(fetchBookmarks())
  }, [dispatch]);

  const createBookmarkHandler = (movie) => {
    dispatch(addBookmark(movie));
  }

  const removeBookmarkHandler = (id) => {
    dispatch(deleteBookmark(id));
    dispatch(fetchBookmarks());
  }

  const resultsHandler = (results, keywords) => {
    dispatch(displayMoviesResults({
      keywords,
      results
    }));
  }
  const selectHandler = (id) => {
    setSelection(true);
    dispatch(selectMovie(id));
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
            id={movieSelectedId}
            bookmarks={bookmarks}
            onAddBookmark={createBookmarkHandler}
            onDeleteBookmark={removeBookmarkHandler}
            onBack={backHandler}
          />
        ) : (
          <Home
            searchKeywords={keywords}
            searchResults={results}
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
