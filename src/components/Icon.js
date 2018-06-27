import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const IconWrapperDiv = styled.div`
  margin: 5px 10px 5px 0px;
  display: inline-block;
`;

const IconDiv = styled.a`
  color: white;
  height: 20px;
  width: 20px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    color: #05b1d1;
  }
`;

const Icon = ({link, name}) => (
  <IconWrapperDiv>
    <IconDiv href={link} target={'_blank'} rel={'noopener'}>
      <FontAwesome className={name || ''} name={name || ''} size={'2x'} />
    </IconDiv>
  </IconWrapperDiv>
);

export default Icon;

