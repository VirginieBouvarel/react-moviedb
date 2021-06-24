import React from 'react'

const MovieDetails = ({ id, keywords, name, onBack }) => {


  return (
    <>
      <div className="back">
        <button type="button" className="back_btn" onClick={onBack}>Retour</button>
      </div>
      <h3>Movie Details</h3>
    </>
  )
}

export default MovieDetails
