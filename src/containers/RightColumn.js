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
  left: calc(50% + 410px);

  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const popIcons = (icons = []) => {
  const iconDivs = icons.map(icon => (
    <Icon key={ icon.name } name={ icon.name } link={ icon.website } />
  ));

  return <Group> { iconDivs } </Group>;
}

const RightColumn = props => {
  const text = props.text.map(phrase => (
    <TextLarge key={ phrase }> { phrase } </TextLarge>
  ));

  const icons = popIcons(props.icons);

  return (
    <RightColumnDiv>
      <Image src={ handle } alt={ "Profile Picture" } />
      { text }
      { icons }
    </RightColumnDiv>
  );
};

export default RightColumn;
