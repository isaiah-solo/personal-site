import React from 'react';
import styled from 'styled-components';

const TextSmallDiv = styled.p`
  color: white;
  font-size: 13px;
  margin-bottom: 0px;
`;

const TextSmall = props => <TextSmallDiv> { props.children } </TextSmallDiv>;

export default TextSmall;

