import React from 'react';
import styled from 'styled-components';

const TextSmallDiv = styled.p`
  color: white;
  font-size: 10pt;
  margin-bottom: 0px;
`;

const TextSmall = props => (
  <TextSmallDiv> { props.children } </TextSmallDiv>
);

export default TextSmall;

