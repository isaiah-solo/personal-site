import React from 'react';
import styled from 'styled-components';

import Group from '../components/Group';
import Icon from '../components/Icon';
import Image from '../components/Image';

import { TextLarge } from '../components/Text';

import handle from '../res/handle.jpg';

const RightColumnDiv = styled.div`
  height: 200px;
  width: calc(50% - 450px);
  position: fixed;
  top: 72px;
  left: calc(50% + 370px);

  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const RightColumn = ({icons, text}) => {
  const iconDivs = icons && icons.map(({name, website}, index) => (
    <Icon key={index} name={name} link={website} />
  ));
  const groupDiv = iconDivs && <Group> {iconDivs} </Group>;
  const contentDivs = text.map(phrase => (
    <TextLarge key={phrase}> {phrase} </TextLarge>
  ));

  return (
    <RightColumnDiv>
      <Image src={handle} alt={"Profile Picture"} />
      {contentDivs}
      {groupDiv}
    </RightColumnDiv>
  );
};

export default RightColumn;
