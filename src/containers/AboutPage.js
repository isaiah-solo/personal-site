import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis } from 'recharts';

import Pill from '../components/Pill';
import Icon from '../components/Icon';
import Group from '../components/Group';
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
    const detailList = details.map((detail, index) => <TextSmall key={ index }> { detail } </TextSmall>);

    return <div> { detailList } </div>;
  }

  popExperience = (experience, skills, counter) => {
    const dateLengthString = dateLengthToString(experience.startDate, experience.endDate);
    const startDateString = dateToString(experience.startDate);
    const endDateString = experience.endDate ? dateToString(experience.endDate) : 'Present';

    const detailList = this.popDetails(experience.details);
    const pillDivs = skills.map((skill, index) =>
      <Pill key={ index } skill={ skill } />
    );

    return (
      <PageItem key={ counter }>
        <TextLarge>
          { experience.position } at <TextLink link={ experience.website }> { experience.company } </TextLink>
        </TextLarge>
        <TextFaded> { dateLengthString.length > 0 ? dateLengthString + ', ' : '' } { startDateString } - { endDateString } </TextFaded>
        { detailList }
        <Group> { pillDivs } </Group>
      </PageItem>
    );
  }

  popExperienceList = (experiences, skills) => {
    const experienceList = [];

    let counter = 0;
    for (const experience of experiences) {
      const experienceSkills = experience.skills || [];

      const filteredSkills = skills.filter((skill) =>
        experienceSkills.find((experienceSkill) => skill.name === experienceSkill)
      );

      experienceList.push(this.popExperience(experience, filteredSkills, counter++));
    }

    return <div> { experienceList } </div>;
  }

  render = () => {
    const profile = this.state.profile;
    const experiences = this.state.experience;
    const skills = this.state.skills;

    const experienceList = this.popExperienceList(experiences, skills);
    const backendData = [
      {"name": "Python", "one": 3},
      {"name": "PHP", "one": 3},
      {"name": "Node.js", "one": 2},
      {"name": "Golang", "one": 1},
    ];

    const frontendData = [
      {"name": "JavaScript", "one": 3},
      {"name": "React", "one": 2},
      {"name": "JQuery", "one": 2},
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
              <ResponsiveContainer width="100%" height={100}>
              <BarChart style={{marginTop: "16px"}} data={ backendData }>
                <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="white" />
                <Bar dataKey="one" fill="#05b1d1" />
              </BarChart>
              </ResponsiveContainer>
            </PageItem>
            <PageItem>
              <TextLarge> Frontend </TextLarge>
              <ResponsiveContainer width="100%" height={100}>
              <BarChart width={320} height={100} style={{marginTop: "16px"}} data={ frontendData }>
                <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="white" />
                <Bar dataKey="one" fill="#ee0060" />
              </BarChart>
              </ResponsiveContainer>
            </PageItem>
          </PageItemContainer>
        }
        {experienceList}
      </div>
    );
  }
}

