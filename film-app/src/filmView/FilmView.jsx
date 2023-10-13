import React from "react";

const FilmView = ({ film }) => {
  return (
    <div>
      <h1>{film.titre}</h1>
      <iframe
        width="560"
        height="315"
        frameborder="0"
        src={film.trailerURL}
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default FilmView;
