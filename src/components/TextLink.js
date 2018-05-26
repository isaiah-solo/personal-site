import React from 'react';
import styled from 'styled-components';

const TextLinkDiv = styled.a`
  color: #05b1d1;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

const TextLink = props => (
  <TextLinkDiv href={ props.link || "" } target="_blank" rel="noopener">
    { props.children }
  </TextLinkDiv>
);

export default TextLink;

