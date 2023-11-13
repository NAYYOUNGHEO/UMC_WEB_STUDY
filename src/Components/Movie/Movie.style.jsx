import styled from 'styled-components';

export const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
    padding: 16px;
    background-color: rgb(32, 39, 99); 
`;

export const MovieCard = styled.div`
    position: relative;
    background-color: rgb(63, 70, 139);
    width: 200px; 
    margin: 0.5em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border-radius: 5px;
    &:hover div {
        opacity: 1;
        visibility: visible;
    }
`;

export const MoviePoster = styled.img`
    width: 100%;
    display: block;
`;

export const MovieInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    color: white;
`;

export const MovieTitle = styled.div`
    flex: 1;
    margin: 0;
    font-size: 1em;
 `;

export const MovieRate = styled.div`
    margin-left: 10px;
    white-space: nowrap;
`;