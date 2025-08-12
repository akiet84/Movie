import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function MovieCard({id, img, name, description }) {
  return (
    <Link to ={`/movie/${id}`} className="movie-card">
      <img src={`https://image.tmdb.org/t/p/original${img}`} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
    </Link>
  );
}

export default MovieCard;
