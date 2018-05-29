import React from 'react';
import styled from 'styled-components';

const TextLargeDiv = styled.h2`
  color: white;
  font-size: 12pt;
  margin-bottom: 0px;
`;

const TextLarge = props => <TextLargeDiv> { props.children } </TextLargeDiv>;

export default TextLarge;

