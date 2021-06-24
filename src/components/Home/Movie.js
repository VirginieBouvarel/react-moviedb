import React from 'react';
import classes from './Movie';
import placeHolderTMDB from '../../assets/poster-tmdb.png';

const Movie = ({ keywords, id, posterPath, name, releaseDate, onSelect }) => {
  const posterUrl = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : placeHolderTMDB;

  return (
    <li className={classes.card} onClick={onSelect.bind(null, id, keywords)}>
      <img src={posterUrl} alt='Poster' />
      <h3>{name}</h3>
      <p>{releaseDate}</p>
    </li>
  )
}

export default Movie;
