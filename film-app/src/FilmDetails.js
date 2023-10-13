import React from "react";
import { Link, Outlet } from "react-router-dom";
import urlVideo from "./assets/video/central.mp4";

const FilmDetails = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <h1>bienvenue</h1>
      <Link to="/">Retour</Link>
      <video src={urlVideo} width="500px" controls></video>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link to="/filmdetails/description">Afficher la description</Link>
        <Link to="/filmdetails/comment">Afficher les commentaire</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default FilmDetails;
