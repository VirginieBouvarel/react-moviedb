import React from 'react';
import classes from './Results.module.css';

const Results = () => {
  return (
    <section className={classes.results}>
      <h2 className="sr-only">Résultat</h2>
      <ul className={classes.card}></ul>
    </section>
  )
}

export default Results
