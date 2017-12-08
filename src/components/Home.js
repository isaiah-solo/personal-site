import React, { Component } from 'react';

import '../styles/Page.scss';

import Pill from './Pill';

class Home extends Component {

  /**
   * Gets item of skills from json object
   */
  getSkillsItem(obj) {
    var list = [];

    var count = 0;
    for (var skill in obj) {
      list.push(<Pill key={count++} skill={skill} url={obj[skill]}/>);
    }

    return (
      <div className="PageItem">
        <div className="PageLargeText">Site created using</div>
        {list}
      </div>
    );
  }

  /**
   * Render
   */
  render() {
    var prof = this.props.jsonObj.profile;
    var email = "mailto:" + prof.email;
    var loc = prof.location.city + ", " + prof.location.state;

    var skills = prof.skills;
    const skillsItem = this.getSkillsItem(skills);

    return (
      <div>
        <div className="PageItem">
          <div className="PageTitleText"> Home</div>
        </div>
        <div className="PageItem">
          <div className="PageLargeText"> {prof.name} </div>
          <div className="PageLargeText"> {prof.position} </div>
          <a className="PageLargeLink" href={email}> {prof.email} </a>
          <div className="PageLargeText"> {loc} </div>
        </div>
        {skillsItem}
      </div>
    );
  }
}

export default Home;
