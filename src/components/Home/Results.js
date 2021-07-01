import React from 'react';
import classes from './Results.module.css';
import Movie from './Movie.js';


const Results = ({ movies, keywords, onSelect }) => {

  return (
    <section className={classes.results}>
      <h2 className="sr-only">Résultat</h2>
      <ul className={classes.cards}>
        {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            posterPath={movie.poster_path}
            name={movie.original_title || movie.original_name || movie.name || movie.title}
            releaseDate={movie.release_date}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </section>
  )
}

export default Results
