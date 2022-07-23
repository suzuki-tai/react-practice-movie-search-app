import React, { useEffect, useState } from "react";
import { MovieProps } from "@/interface/MovieProps";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const imdbId = useParams().imdbID;
  const [movie, setMovie] = useState({} as MovieProps);

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=4a3b711b`)
      .then((jsonResponse) => {
        setMovie(jsonResponse.data)
      })
  }, [imdbId]);

  return (
    <>
      <div className='details'>
        <h3>Title: {movie.Title}</h3>
        <p>ID: {imdbId}</p>
        <p>Released: {movie.Released}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Plot: {movie.Plot}</p>
        <p>Country: {movie.Country}</p>
        <p>Director: {movie.Director}</p>
        <p>Actors: {movie.Actors}</p>
      </div>
    </>
  );
};

export default Detail;
