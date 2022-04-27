import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./Components/MovieCard";

// http://www.omdbapi.com/?i=tt3896198&apikey=3f9eafa3
const API_URL = "http://www.omdbapi.com/?apikey=3f9eafa3";

function App() {
  const [searchTerm, useSearchTerm] = useState("");

  const [movies, setMovies] = useState([]);
  // console.log(movies);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    // console.log(data.Search);

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("harry potter");
  }, []);

  return (
    <div className="app">
      <h1>MovieSearch</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => useSearchTerm(e.target.value)}
        ></input>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {movies ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}></MovieCard>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
      <footer className="footer">
        <h5>Made with ❤️ by Deekshant</h5>
        {/* <h5>
          Made with <span>&hearts;</span> by Deekshant
        </h5> */}
      </footer>
    </div>
  );
}

export default App;
