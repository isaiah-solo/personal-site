import React from 'react';

import PillGroup from './PillGroup';
import Firebase from './Firebase';

import '../styles/Page.scss';

export default class HomePage extends React.Component {

  state = {
    profile: {},
    skills: []
  }

  componentWillMount() {

    Firebase.zayz.bindToState('profile', {
      context: this,
      state: 'profile'
    });

    Firebase.zayz.bindToState('skills', {
      context: this,
      state: 'skills',
      asArray: true
    });
  }

  render() {

    const profile = this.state.profile;
    const site = profile.site;

    let skills = this.state.skills.slice(0);

    skills = skills.filter((skill) =>
      site.find((siteSkill) => skill.name === siteSkill)
    );

    return (
      <div>
        <div className="PageItem">
          <h2 className="PageLargeText"> {profile.name} </h2>
          <h2 className="PageLargeText"> {profile.position} </h2>
          <a className="PageLargeLink" href={"mailTo:" + profile.email}> {profile.email} </a>
          <h2 className="PageLargeText"> {profile.location} </h2>
        </div>
        <div className="PageItem">
          <h1 className="PageTitleText">Site created using</h1>
          <PillGroup skills={skills} />
        </div>
      </div>
    );
  }
}

