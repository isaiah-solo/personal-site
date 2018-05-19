import React from 'react';
import styled from 'styled-components';

import Pill from '../components/Pill';
import Icon from '../components/Icon';
import Group from '../components/Group';

import { dateToString, dateLengthToString } from '../utils/DateUtil';

const PageItemDiv = styled.div`
  background: #2c2c2c;
  border-radius: 2px;
  margin: 0px auto 20px auto;
  padding: 20px;
  width: 700px;

  @media screen and (max-width: 1000px) {
    border-radius: 0px;
    box-shadow: none;
    margin: 0px 0px 5px 0px;
    min-width: 0px;
    padding: 15px;
    width: auto;
  }
`;

const PageLargeText = styled.h2`
  color: white;
  font-size: 12pt;
  margin-bottom: 0px;
`;

const PageSmallText = styled.p`
  color: white;
  font-size: 10pt;
  margin-bottom: 0px;
`;

const PageFadedText = styled.p`
  color: #b2b2b2;
  font-size: 10pt;
  margin-bottom: 0px;
  margin-top: 4px;
`;

const PageLinkDiv = styled.a`
  color: #05b1d1;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

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
    fetch('http://localhost:8080/api/site', { headers: { 'Content-Type': 'application/json' } })
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

  popDetails(details = []) {
    const detailList = details.map((detail, index) => <PageSmallText key={ index }> { detail } </PageSmallText>);

    return (
      <div> { detailList } </div>
    );
  }

  popExperience(experience, skills, counter) {
    const dateLengthString = dateLengthToString(experience.startDate, experience.endDate);
    const startDateString = dateToString(experience.startDate);
    const endDateString = experience.endDate ? dateToString(experience.endDate) : 'Present';

    const detailList = this.popDetails(experience.details);
    const pillDivs = skills.map((skill, index) =>
      <Pill key={ index } skill={ skill } />
    );

    return (
      <PageItemDiv key={ counter }>
        <PageLargeText>
          { experience.position } at <PageLinkDiv href={ experience.website } target="_blank" rel="noopener">
            { experience.company }
          </PageLinkDiv>
        </PageLargeText>
        <PageFadedText> { dateLengthString.length > 0 ? dateLengthString + ', ' : '' } { startDateString } - { endDateString } </PageFadedText>
        { detailList }
        <Group items={ pillDivs } />
      </PageItemDiv>
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
        <PageItemDiv>
          <PageLargeText> { profile.name } </PageLargeText>
          <PageLargeText> { profile.position } </PageLargeText>
          <PageLargeText> { profile.location } </PageLargeText>
          <FontAwesomeWrapper icons={ profile.icons || [] } />
        </PageItemDiv>
        {experienceList}
      </div>
    );
  }
}

