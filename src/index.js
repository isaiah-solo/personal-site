import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'
import App from './containers/App';

import './styles/index.css';

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);
