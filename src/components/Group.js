import React from 'react';
import styled from 'styled-components';

const GroupDiv = styled.div`
  margin-top: ${ props => props.empty ? '0px' : '16px' };
`;

const Group = props => (
  <GroupDiv empty={ props.items.length === 0 }> { props.items } </GroupDiv>
);

export default Group;

