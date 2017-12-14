import React from 'react';

import Pill from './Pill';

import '../styles/App.scss';

const PillGroup = (props) => {

  const skills = props.skills;
  const pillGroup = skills.map((skill, index) =>
    <Pill key={index} skill={skill} />
  );

  return (
    <div> {pillGroup} </div>
  );
}

export default PillGroup;

