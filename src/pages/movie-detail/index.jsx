import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import Tag from "../../components/tag";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';



function MovieDeatail() {
  //xác định id là gì
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [credits, setCredits] =  useState({});
  console.log(movieId);

  //https://api.themoviedb.org/3/movie/1087192?api_key=a10ee5569194b352bcca20840b7f8a32

  useEffect(() => {
    fetchMovieDetail();
    fetchCredits();
  }, [movieId]);

  const fetchMovieDetail = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a10ee5569194b352bcca20840b7f8a32`
    );
    console.log(response.data);
    setMovieDetail(response.data);
  };

  const fetchCredits = async () =>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a10ee5569194b352bcca20840b7f8a32`)
    console.log(response.data);
    setCredits(response.data);
  }

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
            <p className="tagline">{movieDetail?.tagline}</p>
            <Tag>abc</Tag>

            <div className="circleRating">
              <CircularProgressbar
                value={movieDetail.vote_average}
                maxValue={10}
                text={movieDetail.vote_average?.toFixed(1)}
                styles={buildStyles({
                  pathColor:
                    movieDetail.vote_average < 5
                      ? "red"
                      : movieDetail.vote_average < 7
                      ? "orange"
                      : "green",
                })}
              />
            </div>
            <div>
              <h3>Overview</h3>
              <p>{movieDetail.overview}</p>
              <div className="box">
                <div className="info">
                  <span className="label">Status:</span>
                <span className="value">{movieDetail.status}</span>
                </div>
                <div className="info">
                  <span className="label">Release Date:</span>
                <span className="value">{movieDetail.release_date}</span>
                </div>
                <div className="info">
                  <span className="label">Run time:</span>
                <span className="value">{movieDetail.runtime}</span>
                </div>

              </div>
              <div className="box">
                <div className="info">
                  <span className="label">Director:</span>
                <span className="value">
                  {
                  credits.crew?.filter((item) => item.job === "Director")[0].name
                  }
                  </span>
                </div>
              </div>
              <div className="box">
                <div className="info">
                  <span className="label">Writer:</span>
                <span className="value">
                  {
                  credits.crew?.filter((item) => item.job === "Writer")[0].name
                  }
                </span>
                </div>
              

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDeatail;
