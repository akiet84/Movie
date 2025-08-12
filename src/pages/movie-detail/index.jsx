import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return <div style={{
    color: "white",
  }}>
    {movieDetail?.original_title}
    {movieDetail?.overview}
  </div>;
}

export default MovieDeatail;
