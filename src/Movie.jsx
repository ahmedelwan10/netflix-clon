
import React from 'react';

function Movie({ title, description, imageUrl }) {
  return (
    <div className="movie">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Movie;
