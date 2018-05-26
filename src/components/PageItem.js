import React from 'react';
import styled from 'styled-components';

const PageItemDiv = styled.div`
  background: #2c2c2c;
  border-radius: 2px;
  margin: 0px auto 20px auto;
  padding: 20px;
  width: 700px;

  @media screen and (max-width: 1000px) {
    border-radius: 0px;
    box-shadow: none;
    margin: 0px 0px 5px 0px;
    min-width: 0px;
    padding: 15px;
    width: auto;
  }
`;

const PageItem = props => (
  <PageItemDiv> { props.children } </PageItemDiv>
);

export default PageItem;

