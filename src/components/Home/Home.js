import React from 'react'
import SearchForm from './SearchForm';
import Results from './Results';

const Home = ({ movies, keywords, onResults, onSelect }) => {


  return (
    <div>
      <SearchForm onResults={onResults} keywords={keywords} />
      {movies && <Results movies={movies} keywords={keywords} onSelect={onSelect} />}
    </div>
  )
}

export default Home
