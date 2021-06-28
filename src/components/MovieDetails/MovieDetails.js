import React, { useEffect, useState } from 'react';
import classes from './MovieDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import placeHolderTMDB from '../../assets/poster-tmdb.png';


const MovieDetails = ({ id, onBack }) => {
  const [movieToDisplay, setMovieToDisplay] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=69a59336843cba77936e73fc3e3e5a69&language=fr-FR`);

      const data = await response.json();
      console.log(data);

      const movie = {
        posterUrl: data.poster_path ? `https://image.tmdb.org/t/p/original/${data.poster_path}` : placeHolderTMDB,
        title: data.original_title || data.original_name || data.display.name || data.title,
        release: data.release_date,
        average: data.vote_average,
        summary: data.overview
      }

      setMovieToDisplay(movie);

    };
    fetchMovie();
  }, [id]);


  return (
    <>
      <div className={classes.back}>
        <button type="button" className={classes['back-btn']} onClick={onBack}><FontAwesomeIcon icon="arrow-left" /> Retour</button>
      </div>

      <section className={classes.movie}>
        <img src={movieToDisplay.posterUrl} alt="Affiche du film" />
        <h2 >{movieToDisplay.title}</h2>
        <div className={classes.infos}>
          <p>{movieToDisplay.release}</p>
          <p>{movieToDisplay.average}</p>
        </div>
        <p className={classes.summary}>{movieToDisplay.summary}</p>
      </section>
    </>
  )
}

export default MovieDetails
