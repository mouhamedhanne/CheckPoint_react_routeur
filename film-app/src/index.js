import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import ListeDeFilms from "./compenants/ListeDeFilms";
//import FilmView from "./filmView/FilmView";  <FilmView />,
import FilmDetails from "./FilmDetails";
import Description from "./Ressources/Description";
import Comment from "./Ressources/Comment";
//import PageErrors from "./PageErrors";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //errorElement: <PageErrors />,
  },
  {
    path: "filmdetails",
    element: <FilmDetails />,
    children: [
      {
        path: "/filmdetails/description",
        element: <Description />,
      },
      {
        path: "/filmdetails/comment",
        element: <Comment />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
