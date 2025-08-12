import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import Tag from "../../components/tag";

function MovieDeatail() {
  //xác định id là gì
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState();
  console.log(movieId);

  //https://api.themoviedb.org/3/movie/1087192?api_key=a10ee5569194b352bcca20840b7f8a32

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const fetchMovieDetail = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a10ee5569194b352bcca20840b7f8a32`
    );
    console.log(response.data);
    setMovieDetail(response.data);
  };

  return (
    <div className="movie-detail">
      <div className="banner">
        <img
          className="bg-blur"
          src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path}`}
          alt=""
        />
        <div className="overlay"></div>
        <div className="content">
          <div className="left">
            <img
          src={`https://image.tmdb.org/t/p/original${movieDetail?.poster_path}`}
          alt=""
        />
          </div>
          <div className="right">
            <h1>{movieDetail?.title}</h1>
            <p>{movieDetail?.tagline}</p>
            <Tag>abc</Tag>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDeatail;
