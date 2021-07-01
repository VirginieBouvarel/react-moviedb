import React, { useState, useEffect } from 'react';
import classes from './SearchForm.module.css';


const SearchForm = ({ previousSearch, onResults }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (previousSearch) {
      setInputValue(previousSearch);
    }
  }, [previousSearch]);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const url = `https://api.themoviedb.org/3/search/multi?api_key=69a59336843cba77936e73fc3e3e5a69&language=fr-FR&query=${inputValue}&page=1&include_adult=false`;

    fetch(url)
      .then(response => response.json())
      .then(response => onResults(response.results, inputValue));
  };

  return (
    <section>
      <form className={classes.form} onSubmit={submitHandler}>
        <input className={classes.input} type="search" value={inputValue} onChange={inputChangeHandler} />
        <button className={classes.btn} type="submit">Rechercher</button>
      </form>
    </section>
  )
}

export default SearchForm;
