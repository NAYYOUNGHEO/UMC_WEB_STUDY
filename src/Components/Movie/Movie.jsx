import React, { useState } from "react";
import MovieDetails from "../Movie/MovieDetails";
import { MovieCard, MoviePoster, MovieInfo, MovieTitle, MovieRate } from "./Movie.style";

function Movie({movie}) {
    const [isHovered, setIsHovered] = useState(false);
    const imageUrl= `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
   
    return (
      <MovieCard
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >

        <MoviePoster src={imageUrl} alt={movie.title} />
        <MovieInfo>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieRate>{movie.vote_average}</MovieRate>
        </MovieInfo>
        {isHovered && <MovieDetails movie={movie} />}
      </MovieCard>
    )
  }
  
  export default Movie;