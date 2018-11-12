import React, {useEffect, useState} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components';

import BlogPage from './BlogPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

import Nav from './components/Nav';
import RightColumn from './components/RightColumn';

const PageDiv = styled.div`
  display: block;
  padding: 52px 0px 20px 0px;
  width: auto;

  @media screen and (max-width: 1000px) {
    padding: 52px 0px 0px 0px;
  }
`;

const navLinks = [
  {
    to: '/',
    label: 'home'
  },
  {
    to: '/blog',
    label: 'blog'
  }
];

const pages = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/blog',
    component: BlogPage
  }
];

const App = () => {
  const [profile, setProfile] = useState({});

  useEffect(async () => {
    fetch(
      '/api/static/profile',
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(({profile}) => setProfile(profile))
      .catch(error => console.log(error));
  }, []);

  const {headline, icons, name} = profile;
  return (
    <Router>
      <React.Fragment>
        <RightColumn text={[name, headline]} icons={icons} />
        <Nav links={navLinks} />
        <PageDiv>
          <Switch>
            {pages.map(
              ({component, path}, index) => (
                <Route exact path={path} component={component} key={index} />
              )
            )}
            <Route exact path="*" render={NotFoundPage}/>;
          </Switch>
        </PageDiv>
      </React.Fragment>
    </Router>
  );
};

export default App;

