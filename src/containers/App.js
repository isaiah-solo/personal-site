import React from 'react';

import Nav from '../components/Nav.js';
import Page from '../components/Page.js';

import BlogPage from '../containers/BlogPage';
import AboutPage from '../containers/AboutPage';
import NotFoundPage from '../containers/NotFoundPage';

const App = () => {
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

  return (
    <div>
      <Nav links={ navLinks } />
      <Page routes={ navRoutes } />
    </div>
  );
}

export default App;
