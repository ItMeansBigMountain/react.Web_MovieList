import React from 'react'

const MovieCard = ( {movie} ) => {
    return (
        <div className='movie'>
            <div>
                <p>YEAR</p>
            </div>

            <div>
                <img src="https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png" alt="movie title"
                    onClick={() => { }} />
            </div>

            <div>
                <span> MOVIE TYPE </span>
                <h3>TITLE</h3>
            </div>

        </div>
    )
}

export default MovieCard