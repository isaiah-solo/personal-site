import React, { Component } from 'react';

import '../styles/App.scss'

class Pill extends Component {

  constructor(props) {
    super(props);

    this.state = {
      skill: this.props.skill,
      url: this.props.url
    }    
  }

  /**
   * Render
   */
  render() {
    var skill = this.state.skill;
    var url = this.state.url;

    return (
      <a className="Pill" href={url} target="_blank" rel="noopener">
        {skill}
      </a>
    );
  }
}

export default Pill;
