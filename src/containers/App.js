import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

import BlogPage from '../containers/BlogPage';
import AboutPage from '../containers/AboutPage';

import '../styles/Nav.css';
import '../styles/Page.css';

const NotFound = (props) => (
  <div className="PageItem">
    <div className="PageLargeText">
      Sorry! What you are looking for cannot be found. Maybe try again soon?
    </div>
  </div>
);

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="Nav">
            <div className="NavMenu">
              <NavLink exact to="/" className="NavMenuItem" activeClassName="NavMenuItemActive"> about </NavLink>
              <NavLink exact to="/blog" className="NavMenuItem" activeClassName="NavMenuItemActive"> blog </NavLink>
            </div>
          </div>
          <div className="Page">
            <Switch>
              <Route exact path="/" component={ AboutPage } />
              <Route exact path="/blog" component={ BlogPage } />
              <Route exact path="*" render={ NotFound } />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
