import React from 'react';

import Pill from '../components/Pill';
import Group from '../components/Group';
import BarGraph from '../components/BarGraph';
import PageItem from '../components/PageItem';
import PageItemContainer from '../components/PageItemContainer';

import { TextLarge, TextSmall, TextFaded, TextLink } from '../components/Text';

import { dateToString, dateLengthToString } from '../utils/DateUtil';

export default class AboutPage extends React.Component {
  state = {
    about: {}
  }

  componentDidMount = () => {
    fetch('/api/static/about', { headers: { 'Content-Type': 'application/json' } })
        .then(res => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then(obj => this.setState({
          about: obj.about
        }))
        .catch((error) => console.log(error));
  }

  popDetails = (details = []) => {
    const detailList = details.map((detail, index) =>
      <TextSmall key={index}> {detail} </TextSmall>
    );

    return <div> {detailList} </div>;
  }

  popExperience = (experience, skills) => {
    const dateLengthString = dateLengthToString(experience.startDate, experience.endDate);
    const startDateString = dateToString(experience.startDate);
    const endDateString = experience.endDate ? dateToString(experience.endDate) : "Present";

    const detailList = this.popDetails(experience.details);
    const pillDivs = skills.map((skill, index) =>
      <Pill key={index} link={skill.link}> {skill.label} </Pill>
    );

    return (
      <PageItem key={experience.company + startDateString}>
        <TextLarge>
          {experience.position} at <TextLink link={experience.website}> {experience.company} </TextLink>
        </TextLarge>
        <TextFaded>
          {dateLengthString.length > 0 ? dateLengthString + ", " : ""} {startDateString} - {endDateString}
        </TextFaded>
        {detailList}
        <Group> {pillDivs} </Group>
      </PageItem>
    );
  }

  popExperiences = (experiences = [], skills = []) => {
    const experienceList = [];

    for (const experience of experiences) {
      const experienceSkills = experience.skills || [];

      const filteredSkills = skills.filter((skill) =>
        experienceSkills.find((experienceSkill) =>
          skill.name === experienceSkill
        )
      );

      experienceList.push(this.popExperience(experience, filteredSkills));
    }

    return <div> {experienceList} </div>;
  }

  render = () => {
    const about = this.state.about;

    return (
      <div>
        { about && Object.keys(about).length > 0 &&
          <PageItemContainer>
            <PageItem>
              <TextLarge> Backend </TextLarge>
              <BarGraph data={about.backend} barColor={'#05b1d1'} axisDataKey={'name'} barDataKey={'value'} />
            </PageItem>
            <PageItem>
              <TextLarge> Frontend </TextLarge>
              <BarGraph data={about.frontend} barColor={'#ee0060'} axisDataKey={'name'} barDataKey={'value'} />
            </PageItem>
          </PageItemContainer>
        }
        { about && Object.keys(about).length > 0 && this.popExperiences(about.jobs, about.skills) }
      </div>
    );
  }
}

