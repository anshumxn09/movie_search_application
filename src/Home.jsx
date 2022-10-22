import React, { useContext } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppContext } from "./GlobalData";

const Home = () => {
  const { movies, moveName, setMoveName } = useContext(AppContext);
  return (
    <>
      <h1>MOVIE'S SEARCH APPLICATION</h1>
      <div className="search">
        <input
          type="text"
          value={moveName}
          onChange={(e) => setMoveName(e.target.value)}
          placeholder={"SEARCH MOVIE HERE..."}
        />
      </div>
      <div className="moviesSec">
        {movies.map((elem) => {
          return (
            <>
              <Link to={`/movie/${elem.imdbID}`}>
                <div className="movieBlock" key={elem.imdbID}>
                  <p>{elem.Title}</p>
                  <img
                    src={elem.Poster}
                    alt={elem.Title}
                  />
                </div>
              </Link>
            </>
          );
        })}
      </div>
      <div className="footer">
        <p>&copy; Anshuman Sharma 2022 ❤</p>
      </div>
    </>
  );
};

export default Home;

// {
//   movies.map((elem) => {
//       return <h1>{elem.Title}</h1>
//   })
// }
