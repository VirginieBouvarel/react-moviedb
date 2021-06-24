import React, { useState } from 'react'
import SearchForm from './SearchForm';
import Results from './Results';

const Home = ({ onSelect }) => {
  const [movies, setMovies] = useState();
  const [keywords, setKeywords] = useState('');

  const resultsHandler = (results, keywords) => {
    setMovies(results);
    setKeywords(keywords);
  }

  return (
    <div>
      <SearchForm onResults={resultsHandler} keywords={keywords} />
      {movies && <Results movies={movies} keywords={keywords} onSelect={onSelect} />}
    </div>
  )
}

export default Home
