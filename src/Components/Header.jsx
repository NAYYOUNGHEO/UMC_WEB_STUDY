import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import LoginControl from './LoginControl';

const StyledHeader = styled.header`
    background-color: #032541;
    display: flex;
    align-items: center;
    padding: 10px;
`;

const Logo = styled.img`
    padding-left: 300px;
    height: 20px;
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li`
   margin-left: 30px;
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <Logo
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </StyledLink>
      <NavList>
        <NavItem><StyledLink to="/Movies">영화</StyledLink></NavItem>
        <NavItem><StyledLink to="/TV">TV 프로그램</StyledLink></NavItem>
        <NavItem><StyledLink to="/Celebrity">인물</StyledLink></NavItem>
      </NavList>
      <LoginControl/>
    </StyledHeader>
  );
}

export default Header;
