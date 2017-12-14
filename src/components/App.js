import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

import HomePage from './HomePage';
import ExperiencePage from './ExperiencePage';
import HaircutsPage from './HaircutsPage';

import '../styles/App.scss';
import '../styles/Nav.scss';
import '../styles/Page.scss';

const NotFound = (props) => {

  return (
    <div className="PageItem">
      <div className="PageLargeText">
        Sorry! What you are looking for cannot be found. Maybe try again soon?
      </div>
    </div>
  );
}

export default class App extends React.Component {

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
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/experience" component={ExperiencePage} />
              <Route exact path="/projects" />
              <Route exact path="/haircuts" component={HaircutsPage} />
              <Route exact path="*" render={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
