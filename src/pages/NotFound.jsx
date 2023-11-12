import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
    padding-left: 300px;
`;

const MainLink = styled.p`
  color: red;
  cursor: pointer;
  font-size: 16px;
`;

function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <NotFoundContainer>
      <h1>해당 페이지를 찾지 못했습니다.</h1>
      <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <MainLink onClick={goHome}>메인 페이지로 이동</MainLink>
    </NotFoundContainer>
  );
}

export default NotFound;
