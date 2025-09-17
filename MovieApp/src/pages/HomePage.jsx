import React, { useState } from "react";
import MovieRender from "../components/MovieRender";

function HomePage() {
  const movies = [
    { id: "1", title: "Batman", rel: "2002" },
    { id: "2", title: "Julaai", rel: "2018" },
    { id: "3", title: "Interstellar", rel: "2012" },
    { id: "4", title: "Bahubali", rel: "2020" },
  ];
  const [searchStr, setsearchStr] = useState("");

  function searchHandle(e) {
    e.preventDefault();
    alert(searchStr);
    setsearchStr("");
  }
  return (
    <div className="home">
      <form onSubmit={searchHandle} className="search-form">
        <input
          type="text"
          placeholder="search for movie..."
          className="search-input"
          value={searchStr}
          onChange={(e) => setsearchStr(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map((m) => (
          <MovieRender movie={m} key={m.id} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
