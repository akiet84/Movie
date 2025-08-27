import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
function HeroSection() {
  // B1: lấy keyWord người dùng nhập
  const [keyWord, setKeyWord] = useState("");
  const navigate = useNavigate()

  //B2: action => chuyển qua page search (KÈM THEO KEYWORD)
  const handleSearch = () => {
    navigate(`/search/${keyWord}`);
  };

  return (
    <div className="hero-section">
      <div className="hero-section__content">
        <h1>Welcome</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <div className="search">
          <input
            value={keyWord}
            onChange={(event) => setKeyWord(event.target.value)}
            type="text"
            placeholder="Search for the movie or TV show..."
          />
          <button onClick={handleSearch} >Search</button>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default HeroSection;
