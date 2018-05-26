import React from 'react';
import styled from 'styled-components';

const TextFadedDiv = styled.p`
  color: #b2b2b2;
  font-size: 10pt;
  margin-bottom: 0px;
  margin-top: 4px;
`;

const TextFaded = props => (
  <TextFadedDiv> { props.children } </TextFadedDiv>
);

export default TextFaded;

