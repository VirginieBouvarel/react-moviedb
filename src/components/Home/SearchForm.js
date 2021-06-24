import React from 'react';
import classes from './SearchForm.module.css';

const SearchForm = () => {
  return (
    <section>
      <form className={classes["search_form"]} method="GET" action="details.html">
        <input className={classes["search_input"]} type="search" name="search_input" id="search_input" />
        <button className={classes["search_btn"]} type="submit" id="search_btn">Rechercher</button>
      </form>
    </section>
  )
}

export default SearchForm;
