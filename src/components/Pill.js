import React from 'react';

import '../styles/App.css'

const Pill = props => (
  <a className="Pill" href={props.skill.link} target="_blank" rel="noopener">
    {props.skill.label}
  </a>
);

export default Pill;

