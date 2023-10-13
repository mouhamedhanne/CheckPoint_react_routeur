import React, { useState } from "react";
//import FilmCard from "./compenants/FilmCard";
import casaPapel from "./assets/casaDePapel.jpg";
import allAmerican from "./assets/allAmerican.jpg";
import chuteLondon from "./assets/chuteOfLondon.jpg";
import blackAndBlue from "./assets/blackAndBlue.jpg";
import ListeDeFilms from "./compenants/ListeDeFilms";
import Filtrer from "./compenants/Filter";
import AjouterFilm from "./compenants/AjouterFilm";
import urlVideo from "./assets/video/central.mp4";
//import FilmView from "./filmView/FilmView";

const App = () => {
  const [films, setFilms] = useState([
    {
      titre: "Casa De Papel",
      description: "Description du film 1",
      posterURL: casaPapel,
      trailerURL: urlVideo,
      note: 8.5,
    },
    {
      titre: "All American",
      description: "Description du film 2",
      posterURL: allAmerican,
      trailerURL: urlVideo,
      note: 7.2,
    },
    {
      titre: "Chute De Londre",
      description: "Description du film 3",
      posterURL: chuteLondon,
      trailerURL: urlVideo,
      note: 6,
    },
    {
      titre: "Black And Blue",
      description: "Description du film 4",
      posterURL: blackAndBlue,
      trailerURL: urlVideo,
      note: 5,
    },
  ]);

  const [filteredFilms, setFilteredFilms] = useState(films);
  //fonction d'ajout d'un nouveau film
  const addFilm = (newFilm) => {
    setFilms([...films, newFilm]);
    setFilteredFilms([...films, newFilm]);
  };

  //fonction de filtrage des films
  const filterFilms = ({ titre, note }) => {
    const filtered = films.filter((film) => {
      return (
        film.titre.toLowerCase().includes(titre.toLowerCase()) &&
        (!note || film.note >= parseFloat(note))
      );
    });
    setFilteredFilms(filtered);
  };

  //const [selectedFilm, setSelectedFilm] = useState();

  //Gestionnaire d'evenement onClick pour les boutons dse films
  /* const handleFilmClick = (film) => {
    setSelectedFilm(film);
  };*/

  return (
    <div className="app">
      <Filtrer onFilter={filterFilms} />

      {/* <FilmView film={selectedFilm} /> */}

      <ListeDeFilms films={filteredFilms} />

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <AjouterFilm onAddFilm={addFilm} />
      </div>
    </div>
  );
};

export default App;
