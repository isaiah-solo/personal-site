import React from 'react';

import '../styles/App.scss'

const Pill = (props) => {

  const label = props.skill.label;
  const link = props.skill.link;

  return (
    <a className="Pill" href={link} target="_blank" rel="noopener">
      {label}
    </a>
  );
}

export default Pill;

