import React from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import Movie from "../Components/Movie/Movie";

const MovieDetailContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.7); 
    color: white;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    opacity: 1; 
    visibility: visible; 
    transition: opacity 0.3s ease, visibility 0.3s ease; 
    overflow: auto; /* 내용이 많을 경우 스크롤 */
`;

const ContainerTitle = styled.div`
    font-size: 1em;
    color: white;
    padding-bottom: 20px;
`;

const ContainerOverview = styled.div`
    font-size: 1em;
    color: white;
`;

const MovieDetail = () => {
    const location = useLocation(); 
    const movieData = location.state.movie; 

    return (
        <MovieDetailContainer>
            <ContainerTitle>{movieData.title}</ContainerTitle>
            <ContainerOverview>{movieData.overview}</ContainerOverview>
        </MovieDetailContainer>
    );
}


export default MovieDetail;
