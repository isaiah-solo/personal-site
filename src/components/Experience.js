import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-transition-group';

import '../styles/Page.scss';

import Work from './Work';
import Pill from './Pill';

class Experience extends Component {
  /**
   * Constructor
   */
  constructor(props) {
    super(props);

    this.getWorkList = this.getWorkList.bind(this);
    this.getSkillsItem = this.getSkillsItem.bind(this);
  }

  /**
   * Gets work list from json object
   */
  getWorkList(obj) {
    var list = [];

    obj.forEach(function(val, index) {
      list.push(<Work key={index} item={val} />);
    });

    return list;
  }

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
        <div className="PageLargeText">Misc. Skills</div>
        {list}
      </div>
    );
  }

  /**
   * Render
   */
  render() {
    var experience = this.props.jsonObj.experience;
    const workList = this.getWorkList(experience);

    var skills = this.props.jsonObj.skills;
    const skillItem = this.getSkillsItem(skills);

    return (
      <div>
          <div className="PageItem">
            <div className="PageTitleText">Experience</div>
          </div>
          {workList}
          {skillItem}
      </div>
    );
  }
}

export default Experience;
