import React from 'react';

import Pill from '../components/Pill';
import Icon from '../components/Icon';
import Group from '../components/Group';
import BarGraph from '../components/BarGraph';
import PageItem from '../components/PageItem';
import PageItemContainer from '../components/PageItemContainer';
import TextLarge from '../components/TextLarge';
import TextSmall from '../components/TextSmall';
import TextFaded from '../components/TextFaded';
import TextLink from '../components/TextLink';
import TextTyping from '../components/TextTyping';

import { dateToString, dateLengthToString } from '../utils/DateUtil';

const FontAwesomeWrapper = props => {
  const icons = props.icons;
  const iconDivs = [];

  let key = 0;
  for (const icon of icons) {
    iconDivs.push(
      <Icon key={ key++ } name={ icon.name } link={ icon.website } />
    );
  }

  return <Group> { iconDivs } </Group>;
};

export default class AboutPage extends React.Component {
  state = {
    profile: {},
    experience: [],
    skills: [],
  }

  componentDidMount = () => {
    fetch('/api/site', { headers: { 'Content-Type': 'application/json' } })
        .then(res => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then(site => this.setState({
          profile: site.profile,
          experience: site.experience,
          skills: site.skills,
        }))
        .catch((error) => console.log(error));
  }

  popDetails = (details = []) => {
    const detailList = details.map((detail, index) =>
      <TextSmall key={ index }> { detail } </TextSmall>
    );

    return <div> { detailList } </div>;
  }

  popExperience = (experience, skills) => {
    const dateLengthString = dateLengthToString(experience.startDate, experience.endDate);
    const startDateString = dateToString(experience.startDate);
    const endDateString = experience.endDate ? dateToString(experience.endDate) : "Present";

    const detailList = this.popDetails(experience.details);
    const pillDivs = skills.map((skill, index) =>
      <Pill key={ index } link={ skill.link }> { skill.label } </Pill>
    );

    return (
      <PageItem key={ experience.company + startDateString }>
        <TextLarge>
          { experience.position } at <TextLink link={ experience.website }> { experience.company } </TextLink>
        </TextLarge>
        <TextFaded>
          { dateLengthString.length > 0 ? dateLengthString + ", " : "" } { startDateString } - { endDateString }
        </TextFaded>
        { detailList }
        <Group> { pillDivs } </Group>
      </PageItem>
    );
  }

  popExperienceList = (experiences, skills) => {
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

    return <div> { experienceList } </div>;
  }

  render = () => {
    const profile = this.state.profile;
    const experiences = this.state.experience;
    const skills = this.state.skills;

    const experienceList = this.popExperienceList(experiences, skills);

    const backendData = [
      { 'name': "Python", 'value': 3 },
      { 'name': "PHP", 'value': 3 },
      { 'name': "Node.js", 'value': 2 },
      { 'name': "Golang", 'value': 1 }
    ];

    const frontendData = [
      { 'name': "JavaScript", 'value': 3 },
      { 'name': "React", 'value': 2 },
      { 'name': "JQuery", 'value': 2 }
    ];

    return (
      <div>
        { profile && Object.keys(profile).length > 0 &&
          <PageItem>
            <TextLarge> { profile.name } </TextLarge>
            <TextLarge>
              <TextTyping toType={ profile.titles } loop={ true } />
            </TextLarge>
            <TextLarge> { profile.location } </TextLarge>
            <FontAwesomeWrapper icons={ profile.icons || [] } />
          </PageItem>
        }
        { profile && Object.keys(profile).length > 0 &&
          <PageItemContainer>
            <PageItem>
              <TextLarge> Backend </TextLarge>
              <BarGraph data={ backendData } barColor={ '#05b1d1' } axisDataKey={ 'name' } barDataKey={ 'value' } />
            </PageItem>
            <PageItem>
              <TextLarge> Frontend </TextLarge>
              <BarGraph data={ frontendData } barColor={ '#ee0060' } axisDataKey={ 'name' } barDataKey={ 'value' } />
            </PageItem>
          </PageItemContainer>
        }
        {experienceList}
      </div>
    );
  }
}

