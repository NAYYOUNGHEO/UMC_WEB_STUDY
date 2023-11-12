import React from 'react';
import Movie from '../Components/Movie/Movie';

function Movies({ movies }) {
    const movieList = movies && Array.isArray(movies.results) ? movies.results : [];
    return (
        <div className='movies-container'>
        {movieList.map(movie => (
            <Movie key={movie.id} movie={movie} />
        ))}
        </div>
    );
}

export default Movies;
