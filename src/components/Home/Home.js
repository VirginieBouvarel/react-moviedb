import React from 'react'
import SearchForm from './SearchForm';
import Results from './Results';

const Home = ({ searchKeywords, searchResults, onResults, onSelect }) => {

  return (
    <div>
      <SearchForm previousSearch={searchKeywords} onResults={onResults} />
      {searchResults && <Results movies={searchResults} keywords={searchKeywords} onSelect={onSelect} />}
    </div>
  )
}

export default Home
