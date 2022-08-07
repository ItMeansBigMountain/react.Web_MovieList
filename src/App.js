import './App.css';
import SearchIcon from "./images/search.svg"
import { useState, useEffect } from 'react';

import MovieCard from './components/MovieCard';

const App = () => {


  const [movies, setMovies] = useState([]);
  const [search_query, setSearch_query] = useState("");


  const API_URL = "http://www.omdbapi.com/?apikey=d79dec18"

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search)
    console.log(data.Search)
  }




  useEffect(() => {
    searchMovies(search_query)
  }, [search_query])



  return (
    <div className="App">


      <h1>Movie Land</h1>

      {/* SEARCH BAR */}
      <div className='search'>
        <input
          placeholder='Search For Movies'
          value={search_query}
          onChange={
            (event) => { setSearch_query(event.target.value) }
          }
        />

        <img src={SearchIcon} alt="search"
          onClick={() => { searchMovies(search_query) }} />
      </div>



      {/* MOVIE LIST */}
      <div className='container'>
        {
          movies?.length > 0
            ? (movies.map(i =>
              < MovieCard movie={i} />
            ))
            : (<div className='empty'>
              <h1>No Movies Found For Query: {search_query}</h1>
            </div>)
        }
      </div>


    </div>
  );
}

export default App;
