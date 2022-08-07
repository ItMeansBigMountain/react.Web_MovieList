import './App.css';
import SearchIcon from "./search.svg"
import { useState, useEffect } from 'react';

import MovieCard from './components/MovieCard';

const App = () => {

  const API_URL = "http://www.omdbapi.com/?apikey=d79dec18"


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    console.log(data)
  }


  useEffect(() => {
    searchMovies("batman")
  }, [])



  return (
    <div className="App">

      <h1>Movie Land</h1>

      {/* SEARCH BAR */}
      <div className='search'>
        <input
          placeholder='Search For Movies'
          value="Superman"
          onChange={() => { }}
        />

        <img src={SearchIcon} alt="search"
          onClick={() => { }} />
      </div>



      {/* MOVIE LIST */}
      <div className='container'>
        < MovieCard  />
        < MovieCard  />
        < MovieCard  />
        < MovieCard  />
        < MovieCard  />
        < MovieCard  />
      </div>





    </div>
  );
}

export default App;
