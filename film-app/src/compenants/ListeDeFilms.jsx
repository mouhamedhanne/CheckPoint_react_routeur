import React from "react";
import FilmCard from "./FilmCard";
import "../styles/listFilms.css";

const ListeDeFilms = ({ films }) => {
  return (
    <div
      style={{
        marginTop: "3rem",
      }}
      className="liste_films"
    >
      {films.map((film) => (
        <div className="film_container">
          <FilmCard film={film} />
        </div>
      ))}
    </div>
  );
};

export default ListeDeFilms;
