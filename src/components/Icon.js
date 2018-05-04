import React from 'react';
import FontAwesome from 'react-fontawesome';

import '../styles/App.css'

const Icon = props => (
  <div style={{ margin: '5px 10px 5px 0px', display: 'inline-block' }}>
    <a className='Icon' href={ props.link } target="_blank" rel="noopener">
      <FontAwesome
        className={ props.name || '' }
        name={ props.name || '' }
        size='2x'
      />
    </a>
  </div>
);

export default Icon;

