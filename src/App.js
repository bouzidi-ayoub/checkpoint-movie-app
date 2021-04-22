import React, { useState, useEffect } from "react";

import MovieList from "./Components/MovieList";

import Moviecard from "./Components/Moviecard";
import Ratings from "./Components/Ratings";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Description from "./Components/Description";

const App = () => {
  const [movies, setMovies] = useState([
    {
      Title: 'Star Wars: Episode IV - A New Hope',
      
      Year: "1977",
      ID: "tt0076759",
      description:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy .",
      Rating: 5,
      Trailer: "https://www.imdb.com/video/vi1317709849?playlistId=tt0076759",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      ID: "tt0086190",
      description:
        "Despite the destruction of the Dark Star, the Empire maintains its grip on the galaxy, and relentlessly pursues its fight against the Rebel Alliance",
      Rating: 4,
      Trailer: " https://www.imdb.com/video/vi221753881?playlistId=tt0080684",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      ID: "tt0080684",
      description:
        "The Galactic Empire is more powerful than ever: the construction of the new weapon, the Death Star, threatens the entire universe ...",
      Rating: 4,
      Trailer: "https://www.imdb.com/video/vi1702936345?playlistId=tt0086190",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
  ]);

  // ADDING Searching
  const addMovie = (newMovie) => {
    setSearchResult([...searchResult, newMovie]);

    setMovies([...movies, newMovie]);
  };
  const [starRate, setStarRate] = useState(0);

  // keyword Search
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(movies);
  const filterMovies = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const result = movies.filter(
      (movie) =>
        movie.Rating >= starRate && movie.Title.toLowerCase().includes(search)
    );
    setSearchResult(result);
  }, [search, movies, starRate]);

  const getStar = (s) => {
    setStarRate(s);
  };

  return (
    <Router>
      <>
        <div className="NavBar">
          <input
            className="Input"
            type="text"
            placeholder="search..."
            value={search}
            onChange={filterMovies}
          />
          <h1 className="Title">Movies </h1>

          <Ratings className="RatingStar" getStar={getStar} />
        </div>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <MovieList className="MovieList" movies={searchResult} />
            )}
          />
          <Route
            path="/description/:id"
            exact
            render={(props) => <Description movies={movies} />}
          />
        </Switch>
        <Moviecard className="MovieCard" addMovie={addMovie} />
      </>
    </Router>
  );
};

export default App;
