import React, { useState, useEffect } from 'react';
import Movie from '../Movie';

function Gallery1() {
  const [movies, setMovies] = useState([]);
  const apiKey = '8226effc' 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=The%20Dark%20Knight`);
        const data = await response.json();
        setMovies(data.Search || []);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    fetchData();
  }, [apiKey]);

  return (
    <div className="gallery">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          description={`Year: ${movie.Year}`}
          imageUrl={movie.Poster}
        />
      ))}
    </div>
  );
}

export default Gallery1;
