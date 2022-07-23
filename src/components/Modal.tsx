import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { Dialog } from '@reach/dialog';
import { MovieProps } from "@/interface/MovieProps";
import axios from "axios";
import { Button } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';

const Modal = () => {
  const navigate = useNavigate();
  const buttonRef = useRef<SVGSVGElement>(null);

  const onDismiss = () => {
    navigate(-1);
  };

  const imdbId = useParams().imdbId;
  const [movie, setMovie] = useState({} as MovieProps);

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=4a3b711b`)
      .then((jsonResponse) => {
        setMovie(jsonResponse.data)
      })
  }, []);

  const formatItem = (item: string | undefined) => item === 'N/A' ? '-' : item;

  return (
    <Dialog
      className='detail-dialog'
      aria-labelledby='label'
      onDismiss={onDismiss}
      initialFocusRef={buttonRef}
    >
      <div className='detail-dialog-header'>
        <div className='detail-dialog-title'>
          <h2>Details</h2>
        </div>
        <Button className='detail-dialog-close-button'>
          <CloseIcon
            ref={buttonRef}
            onClick={onDismiss}
          />
        </Button>
      </div>
      <div className='detail-dialog-content'>
        <h3>Title: {movie.Title}</h3>
        <p>ID: {imdbId}</p>
        <p>Released: {formatItem(movie.Released)}</p>
        <p>Genre: {formatItem(movie.Genre)}</p>
        <p>Plot: {formatItem(movie.Plot)}</p>
        <p>Country: {formatItem(movie.Country)}</p>
        <p>Director: {formatItem(movie.Director)}</p>
        <p>Actors: {formatItem(movie.Actors)}</p>
      </div>
    </Dialog>
  );
};

export default Modal;
