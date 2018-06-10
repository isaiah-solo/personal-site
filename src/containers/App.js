import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom'

import RightColumn from '../containers/RightColumn';
import BlogPage from '../containers/BlogPage';
import AboutPage from '../containers/AboutPage';
import NotFoundPage from '../containers/NotFoundPage';

import Nav from '../components/Nav';
import Page from '../components/Page';

export default class App extends React.Component {
  state = {
    profile: {},
  }

  componentDidMount = () => {
    fetch('/api/static/profile', { headers: { 'Content-Type': 'application/json' } })
        .then(res => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then(obj => this.setState({
          profile: obj.profile,
        }))
        .catch((error) => console.log(error));
  };

  render = () => {
    const navLinks = [
      { to: '/', label: 'about' },
      { to: '/blog', label: 'blog' }
    ];

    const navRoutes = {
      pages: [
        { path: '/', component: AboutPage },
        { path: '/blog', component: BlogPage }
      ],
      notFound: { path: '*', component: NotFoundPage }
    };

    const profile = this.state.profile || {};

    const text = [];

    if (profile.name) text.push(profile.name);
    if (profile.headline) text.push(profile.headline);

    const icons = profile.icons || [];

    return (
      <Router>
        <div>
          <RightColumn text={ text } icons={ icons } />
          <Nav links={ navLinks } />
          <Page routes={ navRoutes } />
        </div>
      </Router>
    );
  };
}

