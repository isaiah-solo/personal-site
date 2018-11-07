import React from 'react';
import styled from 'styled-components';

const GroupDiv = styled.div`
  margin-top: ${props => props.empty ? '0px' : '13px'};
`;

const Group = ({children}) => (
  <GroupDiv empty={React.Children.count(children) === 0}>
    {children}
  </GroupDiv>
);

export default Group;

