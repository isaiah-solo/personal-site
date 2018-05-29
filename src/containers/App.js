import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Nav from '../components/Nav.js';
import BlogPage from '../containers/BlogPage';
import AboutPage from '../containers/AboutPage';
import NotFoundPage from '../containers/NotFoundPage';

import styled from 'styled-components';

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
          <Nav />
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
