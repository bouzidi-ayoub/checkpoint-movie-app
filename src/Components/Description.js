import React, { useState, useEffect } from "react";

import {  useParams } from "react-router-dom";
import MovieList from "./MovieList";

const Description = ({ movies }) => {
  const { id } = useParams();

  const [film, setFilm] = useState("");

  useEffect(() => {
    const newFilm = movies.filter((movie) => movie.ID === id);
    setFilm(newFilm);
  }, [id]);

  return (
    <>
      {
        console.log(film)}
      {film && film.map((f) => (
        <div style={{ backgroundColor: "#ffd700" }}>
         

          <h1>{f.Title}</h1>
          <span>{f.Year}</span>

          <h4>{f.description}</h4>
        </div>
      ))}
    </>
  );
};

export default Description;
