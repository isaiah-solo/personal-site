import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opactiy: 1;
  }
`;

const PageItemDiv = styled.div`
  border-bottom: 1px solid #2c2c2c;
  border-radius: 2px;
  margin: 0px auto;
  padding: 20px 0px;
  width: 700px;
  animation: ${fadein} 0.5s ease;

  &:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: 1000px) {
    border-radius: 0px;
    box-shadow: none;
    margin: 0px 0px 5px 0px;
    min-width: 0px;
    padding: 15px;
    width: auto;
  }
`;

const PageItem = ({children}) => <PageItemDiv> {children} </PageItemDiv>;

export default PageItem;

