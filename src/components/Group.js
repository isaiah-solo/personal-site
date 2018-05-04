import React from 'react';

import '../styles/App.css';

const Group = props => (
  <div style={{marginTop: props.items.length !== 0 ? '16px' : '0px'}}> { props.items } </div>
);

export default Group;

