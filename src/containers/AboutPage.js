import React from 'react';
import moment from 'moment';

import Pill from '../components/Pill';
import Icon from '../components/Icon';
import Group from '../components/Group';

import '../styles/Page.css';

const FontAwesomeWrapper = props => {
  const icons = props.icons;

  const iconDivs = [];

  let key = 0;
  for (const icon of icons) {
    iconDivs.push(
      <Icon key={ key++ } name={ icon.name } link={ icon.website } />
    );
  }

  return (
    <Group items={ iconDivs } />
  );
};

export default class AboutPage extends React.Component {

  state = {
    profile: {},
    experience: [],
    skills: []
  }

  componentDidMount() {
    fetch('/api/site')
        .then(res => res.json())
        .then(site => this.setState({
          profile: site.profile,
          experience: site.experience,
          skills: site.skills,
        }));
  }

  popDetails(details = []) {
    const detailList = details.map((detail, index) => <p className="PageSmallText" key={ index }> { detail } </p>);

    return (
      <div> { detailList } </div>
    );
  }

  popExperience(experience, skills, counter) {
    const startDate = moment(experience.startDate).format('MMM YYYY');
    const endDate = experience.endDate !== ''
        ? moment(experience.endDate).format('MMM YYYY')
        : 'Present';

    const detailList = this.popDetails(experience.details);
    const pillDivs = skills.map((skill, index) =>
      <Pill key={ index } skill={ skill } />
    );

    return (
      <div className="PageItem" key={ counter }>
        <h1 className="PageTitleText">
          { experience.position } at <a className="PageLink" href={ experience.website } target="_blank" rel="noopener">
            { experience.company }
          </a>
        </h1>
        <div className="PageFadedText"> { startDate } - { endDate } </div>
        { detailList }
        <Group items={ pillDivs } />
      </div>
    );    
  }

  popExperienceList(experiences, skills) {
    const experienceList = [];

    let counter = 0;
    for (const experience of experiences) {
      const experienceSkills = experience.skills || [];

      const filteredSkills = skills.filter((skill) =>
        experienceSkills.find((experienceSkill) => skill.name === experienceSkill)
      );

      experienceList.push(this.popExperience(experience, filteredSkills, counter++));
    }

    return (
      <div> { experienceList } </div>
    );
  }

  render() {
    const profile = this.state.profile;
    const experiences = this.state.experience;
    const skills = this.state.skills;

    const experienceList = this.popExperienceList(experiences, skills);

    return (
      <div>
        <div className="PageItem">
          <h2 className="PageLargeText"> { profile.name } </h2>
          <h2 className="PageLargeText"> { profile.position } </h2>
          <h2 className="PageLargeText"> { profile.location } </h2>
          <FontAwesomeWrapper icons={ profile.icons || [] } />
        </div>
        {experienceList}
      </div>
    );
  }
}

