import React from 'react';
import moment from 'moment';

import PillGroup from './PillGroup';
import Firebase from './Firebase'

import '../styles/Page.scss';

const Details = (props) => {

  const details = props.details;
  const detailList = details.map((detail, index) =>
    <p className="PageSmallText" key={index}> {detail} </p>
  );

  return (
    <div> {detailList} </div>
  );
}

const Experience = (props) => {

  const experience = props.experience;
  const skills = props.skills;

  const startDate = moment(experience.startDate).format('MMM YYYY');
  const endDate = experience.endDate !== ''
      ? moment(experience.endDate).format('MMM YYYY')
      : 'Present';

  return (
    <div className="PageItem">
      <h1 className="PageTitleText">
        {experience.position} at <a className="PageLink" href={experience.website} target="_blank" rel="noopener">
          {experience.company}
        </a>
      </h1>
      <div className="PageFadedText"> {startDate} - {endDate} </div>
      <Details details={experience.details} />
      <PillGroup skills={skills} />
    </div>
  );
}

const ExperienceList = (props) => {
  const experiences = props.experiences;

  let experienceList = [];

  for (const experience of experiences) {
    const experienceSkills = experience.skills;

    let skills = props.skills;

    skills = skills.filter((skill) =>
      experienceSkills.find((experienceSkill) =>
          skill.name === experienceSkill)
    );

    if (skills.length < 1) {
      break;
    }

    experienceList.push(<Experience key={experience.company.toString()} experience={experience} skills={skills} />);
  }

  return (
    <div> {experienceList} </div>
  );
}

export default class ExperiencePage extends React.Component {

  state = {
    experience: [],
    skills: []
  }

  componentWillMount() {

    Firebase.zayz.bindToState('experience', {
      context: this,
      state: 'experience',
    });

    Firebase.zayz.bindToState('skills', {
      context: this,
      state: 'skills',
    });
  }

  render() {

    const experiences = this.state.experience;
    const skills = this.state.skills;

    return (
      <div>
        <ExperienceList experiences={experiences} skills={skills} />
      </div>
    );
  }
}

