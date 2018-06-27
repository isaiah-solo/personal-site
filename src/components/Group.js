import React from 'react';
import styled from 'styled-components';

const GroupDiv = styled.div`
  margin-top: ${ props => props.empty ? '0px' : '16px' };
`;

const Group = props => {
  const children = props.children !== undefined ? props.children : [];
  const childCount = children.reduce((total, val) => {
    return total + (typeof(val) === 'object' && val.length > 0 ? 1 : 0);
  }, 0);

  return (
    <GroupDiv empty={childCount === 0}>
      {props.children}
    </GroupDiv>
  );
};

export default Group;

