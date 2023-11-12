import React, { Component } from "react";
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

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let buttonText;
        let welcomeMessage;

        if (isLoggedIn) {
            buttonText = "로그아웃";
            welcomeMessage = <p>환영합니다!</p>;
        } else {
            buttonText = "로그인";
            welcomeMessage = <p>로그인해주세요!</p>;
        }

        return (
            <LoginContainer>
                <LoginButton onClick={isLoggedIn ? this.handleLogoutClick : this.handleLoginClick}>
                    {buttonText}
                </LoginButton>
                <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
            </LoginContainer>
        );
    }
}

export default LoginControl;