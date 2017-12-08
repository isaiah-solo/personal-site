import React, { Component } from 'react';
import moment from 'moment';

import '../styles/Page.scss';

import Pill from './Pill';

class Work extends Component {
  /**
   * Constructor
   */
  constructor(props) {
    super(props);

    var item = this.props.item;
    this.state = {
      company: item.company,
      position: item.position,
      website: item.website,
      startDate: item.startDate,
      endDate: item.endDate,
      skills: item.skills,
      details: item.details
    }

    this.getSkills = this.getSkills.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }

  getSkills(skills) {
    var data = [];

    var count = 0;
    for (var skill in skills) {
      data.push(<Pill key={count++} skill={skill} url={skills[skill]}/>);
    }

    return data;
  }

  getDetails(details) {
    var data = [];

    details.forEach(function(val, index) {
      data.push(<p className="PageSmallText" key={index}>{val}</p>);
    });

    return data;
  }

  /**
   * Render
   */
  render() {
    var startDate = moment(this.state.startDate).format('MMM YYYY');
    var endDate = this.state.endDate !== ''
                ? moment(this.state.endDate).format('MMM YYYY')
                : 'Present';
    var skills = this.getSkills(this.state.skills);
    var details = this.getDetails(this.state.details);

    return (
      <div className="PageItem">
        <div className="PageLargeText"> {this.state.position} at <a className="PageLink" href={this.state.website} target="_blank" rel="noopener">{this.state.company}</a> </div>
        <div className="PageFadedText"> {startDate} - {endDate} </div>
        <div> {details} </div>
	<div> {skills} </div>
      </div>
    );
  }
}

export default Work;
