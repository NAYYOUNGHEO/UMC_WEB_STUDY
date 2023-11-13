import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`

`;

function LoginButton() {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/login'); 
  };

  return (
    <Button onClick={goToLoginPage}>로그인</Button>
  );
}

export default LoginButton;
