import React from 'react'
import styled from 'styled-components';
import { tvs } from "../tvDummy";

const TVContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: rgb(9, 129, 138);
`;

const TVItem = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: inline-block;
  background-color: rgb(156, 206, 209);
`;

const TVPoster = styled.img`
  max-width: 100%;
  display: block;
  height: auto;
`;

const TVInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    font-weight: bold;
`;

const TvTitle = styled.div`
    flex: 1;
    margin: 0;
    font-size: 25px;
 `;

const TvRate = styled.div`
    margin-left: 10px;
    white-space: nowrap;
    font-size: 25px;
`;

function TV() {
  return (
    <TVContainer>
      <h1>TV 프로그램 목록</h1>
      <div>
        {tvs.results.map((tv) => (
          <TVItem key={tv.id}>
            <TVPoster src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={tv.name} />
            <TVInfo>
                <TvTitle>{tv.name}</TvTitle>
                <TvRate>{tv.vote_average}</TvRate>
            </TVInfo>
          </TVItem>
        ))}
      </div>
    </TVContainer>
  );
}

export default TV;