import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MovieDetail from "../../pages/MovieDetail";
import { MovieContainer, MovieCard, MoviePoster, MovieInfo, MovieTitle, MovieRate } from "./Movie.style";

function Movie({ movie }) {
  const navigate = useNavigate(); 
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
      navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  return (
    <MovieContainer>
        <MovieCard
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <MoviePoster src={imageUrl} alt={movie.title} />
            <MovieInfo>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieRate>{movie.vote_average}</MovieRate>
            </MovieInfo>
        </MovieCard>
      </MovieContainer>
  );
}

export default Movie;