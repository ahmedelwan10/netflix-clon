import React, { useState, useEffect } from 'react';
import Movie from '../Movie';

function Gallery2() {
  const [movies, setMovies] = useState([]);
  const apiKey = '8226effc'; 
  const searchQuery = 'requiem for a dream'; 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`);
        const data = await response.json();
        setMovies(data.Search || []);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    fetchData();
  }, [apiKey, searchQuery]);

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

export default Gallery2;
