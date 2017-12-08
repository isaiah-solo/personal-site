import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import '../styles/App.scss';
import '../styles/Nav.scss';
import '../styles/Page.scss';

import Home from './Home';
import Experience from './Experience';
import Haircuts from './Haircuts';

const json = require('../data/resume.json');

const MyHome = (props) => {
  return (
    <Home jsonObj={json} />
  );
}

const MyExperience = (props) => {
  return (
    <Experience jsonObj={json} />
  );
}

const MyHaircuts = (props) => {
  return (
    <Haircuts />
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Nav">
            <div className="NavMenu">
              <NavLink exact to="/" className="NavMenuItem" activeClassName="NavMenuItemActive"> home </NavLink>
              <NavLink exact to="/experience" className="NavMenuItem" activeClassName="NavMenuItemActive"> experience </NavLink>
              <NavLink exact to="/projects" className="NavMenuItem" activeClassName="NavMenuItemActive"> projects </NavLink>
              <NavLink exact to="/haircuts" className="NavMenuItem" activeClassName="NavMenuItemActive"> haircuts </NavLink>
            </div>
          </div>
          <div className="Page">
            <Route exact path="/" render={MyHome} />
            <Route exact path="/experience" render={MyExperience} />
            <Route exact path="/projects" />
            <Route exact path="/haircuts" render={MyHaircuts} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
