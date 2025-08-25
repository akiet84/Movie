import React, { useState } from "react";
import "./index.scss";
function HeroSection() {
  const [keyWord, setKeyWord] = useState ("");

  const handleSearch = ()



  return (
    <div className="hero-section">
      <div className="hero-section__content">
        <h1>Welcome</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <div className="search">
          <input
          value={keyWord}
           type="text" placeholder="Search for the movie or TV show..." />
          <button>Search</button>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default HeroSection;
