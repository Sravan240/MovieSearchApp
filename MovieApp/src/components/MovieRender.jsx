import React from "react";

function MovieRender({ movie }) {
  function favClick() {
    return alert("fav added");
  }

  return (
    <div className="parent">
      <div className="poster">
        <img src={movie.url} alt={movie.title} />
        <div className="over-lay">
          <button className="fav" onClick={favClick}>
            ❤
          </button>
        </div>
      </div>
      <div className="info">
        <h3>{movie.title}</h3>
        <p>{movie.rel}</p>
      </div>
    </div>
  );
}

export default MovieRender;
