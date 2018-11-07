import React from 'react';
import styled from 'styled-components';

const PillDiv = styled.a`
  background: #ee0060;
  border-radius: 15px;
  color: white;
  display: inline-block;
  font-size: 10pt;
  margin: 5px 10px 5px 0px;
  padding: 2px 10px 2px 10px;
  text-decoration: none;
  width: auto;

  &:hover {
    background: #05b1d1;
  }
`;

const Pill = ({children, link}) => (
  <PillDiv href={link} target="_blank" rel="noopener">
    {children}
  </PillDiv>
);

export default Pill;

