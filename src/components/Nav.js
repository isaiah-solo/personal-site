import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom'

const NavDiv = styled.div`
  background: #202020;
  display: block;
  height: 52px;
  position: fixed;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 1000px) {
    box-shadow: none;
    height: 52px;
    padding-left: 10px;
  }
`;

const NavMenuDiv = styled.div`
  margin: 0 auto;
  padding: 5px;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 740px;

  @media screen and (max-width: 1000px) {
    margin: 0px;
    width: 100%;
  }
`;

const NavLinkDiv = styled(NavLink)`
  color: #05b1d1;
  font-size: 19px;
  margin: auto;
  text-decoration: none;

  &:hover {
    color: white;
  }

  &.active {
    color: white;
  }
}
`;

const Nav = props => (
  <NavDiv>
    <NavMenuDiv>
      <NavLinkDiv exact to="/"> about </NavLinkDiv>
      <NavLinkDiv exact to="/blog"> blog </NavLinkDiv>
    </NavMenuDiv>
  </NavDiv>
);

export default Nav;
