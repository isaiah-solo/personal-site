import React, {useEffect, useState} from 'react';

import Group from '../components/Group';
import PageItem from '../components/PageItem';
import Pill from '../components/Pill';

import {TextFaded, TextLarge, TextLink, TextSmall} from '../components/Text';
import {dateLengthToString, dateToString} from '../utils/DateUtil';

const HomePage = () => {
  const [about, setAbout] = useState({});

  useEffect(async () => {
    fetch('/api/static/about', {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then(({about}) => setAbout(about))
      .catch(error => console.log(error));
  }, [])

  const {jobs, skills: masterSkills} = about;
  const jobDivs = (jobs || []).map((job, index) => {
    const {company, details, endDate, position, skills, startDate, website} = job;
    const dateLengthString = dateLengthToString(startDate, endDate);
    const startDateString = dateToString(startDate);
    const endDateString = endDate ? dateToString(endDate) : 'Present';
    const pillDivs = skills.map((skill, index) => {
      const {label, link} = masterSkills.find(
        (entry) => skill === entry.name
      );
      return (
        <Pill key={index} link={link}>
          {label}
        </Pill>
      );
    });
    return (
      <PageItem key={company + startDateString}>
        <TextLarge>
          {`${position} at `} <TextLink link={website}> {company} </TextLink>
        </TextLarge>
        <TextFaded>
          {`${dateLengthString}, ${startDateString} - ${endDateString}`}
        </TextFaded>
        {(details || []).map((detail, index) => (
          <TextSmall key={index}>
            {detail}
          </TextSmall>
        ))}
        {pillDivs.length > 0 && (
          <Group>
            {pillDivs}
          </Group>
        )}
      </PageItem>
    );
  });
  return (
    <React.Fragment>
      {about && jobDivs}
    </React.Fragment>
  );
}

export default HomePage;

