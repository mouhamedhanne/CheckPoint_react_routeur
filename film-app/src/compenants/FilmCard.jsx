import React from "react";
import { Link } from "react-router-dom";

const FilmCard = ({ film }) => {
  return (
    <div>
      <div
        style={{
          border: "1px solid orange",
          borderRadius: "15px",
          padding: "3rem",
          textAlign: "center",
          color: "#fff",
        }}
        className="film-card"
      >
        <img src={film.posterURL} alt={film.titre} />
        <h2 style={{}}>{film.titre}</h2>

        <Link to="filmdetails">
          {" "}
          <button
            style={{
              backgroundColor: "#fff",
              border: "1px solid orange",
              padding: "5px 25px",
              fontSize: "15px",
              borderRadius: "5px",
            }}
          >
            Regarder
          </button>
        </Link>
        <p style={{ color: "orange" }}>Note : {film.note} ✨</p>
      </div>
    </div>
  );
};

export default FilmCard;
