import React from 'react';
import { MovieProps } from '@/interface/MovieProps';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Movie = ({movie}: {movie: MovieProps}) => {
  const poster = movie.Poster === 'N/A' ? 'No Image' : movie.Poster;
  const location = useLocation();

  return (
    <div className="movie">
      <div>
        <nav>
          <Link
            key={movie.imdbID}
            to={`/detail/${movie.imdbID}`}
            state={{ backgroundLocation: location }}
          >
            {movie.Title}
          </Link>
          <Outlet />
        </nav>
        <div>
          <img
            width="200"
            alt={`${movie.Title}`}
            src={poster}
          />
        </div>
        <p>({movie.Year})</p>
      </div>
    </div>
  );
};

export default Movie;
