import React from "react";
import styled from "styled-components";

const MovieDetialContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.7); /
    color: white;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    opacity: 0; 
    visibility: hidden; 
    transition: opacity 0.3s ease, visibility 0.3s ease; 
    overflow: auto; /* 내용이 많을 경우 스크롤 */
    `;

const ContainerTitle = styled.div`
    font-size: 1em;
    color: white;
    padding-bottom: 20px;
`;

const ContainerOveriew = styled.div`
    font-size: 1em;
    color: white;
`;

const MovieDetails = ({ movie }) => {
    return (
        <MovieDetialContainer>
            <ContainerTitle>{movie.title}</ContainerTitle>
            <ContainerOveriew>{movie.overview} </ContainerOveriew>
        </MovieDetialContainer>
    );
}

export default MovieDetails;
