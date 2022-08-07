import './App.css';
import SearchIcon from "./search.svg"
import { useState, useEffect } from 'react';

import MovieCard from './components/MovieCard';

const App = () => {


  const [movies, setMovies] = useState();


  const API_URL = "http://www.omdbapi.com/?apikey=d79dec18"

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search)
    console.log(data.Search)
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
        {
          movies?.length > 0
            ? (movies.map(i =>
              < MovieCard movie={i} />
            ))
            : (<div className='empty'>
              <h1>No Movies Found</h1>
            </div>)
        }
      </div>


    </div>
  );
}

export default App;
