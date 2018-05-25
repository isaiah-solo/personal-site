import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

import BlogPage from '../containers/BlogPage';
import AboutPage from '../containers/AboutPage';
import NotFoundPage from '../containers/NotFoundPage';

import '../styles/Nav.css';
import '../styles/Page.css';

import styled from 'styled-components';

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

const PageDiv = styled.div`
  display: block;
  padding: 52px 0px 20px 0px;
  width: auto;

  @media screen and (max-width: 1000px) {
    padding: 52px 0px 0px 0px;
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavDiv>
            <NavMenuDiv>
              <NavLink exact to="/" className="NavMenuItem" activeClassName="NavMenuItemActive"> about </NavLink>
              <NavLink exact to="/blog" className="NavMenuItem" activeClassName="NavMenuItemActive"> blog </NavLink>
            </NavMenuDiv>
          </NavDiv>
          <PageDiv>
            <Switch>
              <Route exact path="/" component={ AboutPage } />
              <Route exact path="/blog" component={ BlogPage } />
              <Route exact path="*" render={ NotFoundPage } />
            </Switch>
          </PageDiv>
        </div>
      </Router>
    );
  }
}
