import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
`;

const WelcomeMessage = styled.div`
    margin-left: 20px; 
    color: white;
`;

const LoginButton = styled.button`
    margin-left: 30px;
    border-radius: 20px;
    border: none;
    padding: 10px 20px;
    
`;

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setIsLoggedIn(true);
        navigate('/');
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
        navigate('/login'); 
    };

    const buttonText = isLoggedIn ? "로그아웃" : "로그인";
    const welcomeMessage = isLoggedIn ? <p>환영합니다!</p> : <p>로그인해주세요!</p>;


    return (
        <LoginContainer>
            <LoginButton onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}>
                {buttonText}
            </LoginButton>
            <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
        </LoginContainer>
    );
}


export default LoginControl;