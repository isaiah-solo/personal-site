import React from 'react';

import Pill from '../components/Pill';
import Group from '../components/Group';
import PageItem from '../components/PageItem';

import { TextLarge, TextSmall, TextFaded, TextLink } from '../components/Text';

import { dateToString, dateLengthToString } from '../utils/DateUtil';

export default class HomePage extends React.Component {
  state = {
    about: {}
  }

  componentDidMount = () => {
    fetch('/api/static/about', {headers: {'Content-Type': 'application/json'}})
        .then(res => {
          if (!res.ok) throw Error(res.statusText);
          return res.json();
        })
        .then(about => this.setState(about))
        .catch(error => console.log(error));
  }

  popDetails = (details = []) => {
    const detailList = details.map((detail, index) =>
      <TextSmall key={index}> {detail} </TextSmall>
    );

    return <div> {detailList} </div>;
  }

  popExperience = ({company, details, endDate, position, startDate, website}, skills) => {
    const dateLengthString = dateLengthToString(startDate, endDate);
    const startDateString = dateToString(startDate);
    const endDateString = endDate ? dateToString(endDate) : "Present";

    const detailList = this.popDetails(details);
    const pillDivs = skills.map(({label, link}, index) =>
      <Pill key={index} link={link}> {label} </Pill>
    );

    return (
      <PageItem key={company + startDateString}>
        <TextLarge>
          {`${position} at `} <TextLink link={website}> {company} </TextLink>
        </TextLarge>
        <TextFaded>
          {`${dateLengthString}, ${startDateString} - ${endDateString}`}
        </TextFaded>
        {detailList}
        {pillDivs.length > 0 && <Group> {pillDivs} </Group>}
      </PageItem>
    );
  }

  popExperiences = (experiences = [], skills = []) => {
    const experienceList = [];

    for (const experience of experiences) {
      const experienceSkills = experience.skills || [];

      const filteredSkills = skills.filter((skill) =>
        experienceSkills.find((experienceSkill) => skill.name === experienceSkill)
      );

      experienceList.push(this.popExperience(experience, filteredSkills));
    }

    return <div> {experienceList} </div>;
  }

  render = () => {
    const {about} = this.state;
    const {jobs, skills} = about;

    return (
      <div>
        {about && Object.keys(about).length > 0 &&
          <PageItem>
            <TextLarge> {"Hey, I'm Isaiah."} </TextLarge>
          </PageItem>
        }
        {about && Object.keys(about).length > 0 && this.popExperiences(jobs, skills)}
      </div>
    );
  }
}

