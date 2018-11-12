import React, {useEffect, useState} from 'react';

import { BrowserRouter as Router } from 'react-router-dom'

import RightColumn from '../components/RightColumn';
import BlogPage from '../components/BlogPage';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';

import Nav from '../components/Nav';
import Page from '../components/Page';

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

const navRoutes = {
  pages: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/blog',
      component: BlogPage
    }
  ],
  notFound: {
    path: '*',
    component: NotFoundPage
  }
};

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
        <Page routes={navRoutes} />
      </React.Fragment>
    </Router>
  );
};

export default App;

