import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';

library.add(faArrowLeft);


function App() {
  const [movies, setMovies] = useState();
  const [keywords, setKeywords] = useState('');
  const [selection, setSelection] = useState(false);
  const [idSelected, setIdSelected] = useState();


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
