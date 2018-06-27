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

const PageItemContainerDiv = styled.div`
  margin: 0px auto 20px auto;
  width: 740px;
  animation: ${fadein} 0.5s ease;

  @media screen and (max-width: 1000px) {
    margin: 0px 0px 5px 0px;
    min-width: 0px;
    width: auto;
  }
`;

const PageItemDiv = styled.div`
  background: #2c2c2c;
  border-radius: 2px;
  display: inline-block;
  margin: 0px 20px 0px 0px;
  padding: 20px;
  width: 320px;

  &:last-child {
    margin-right: 0px;
  }

  @media screen and (max-width: 1000px) {
    border-radius: 0px;
    box-shadow: none;
    margin: 0px;
    margin-right: 5px;
    min-width: 0px;
    padding: 15px;
    width: calc(50% - 32.5px);

    &:last-child {
      margin-right: 0px;
    }
  }
`;

const PageItemContainer = ({children}) => {
  const childrenDivs = React.Children.map(children, (element, index) => (
    <PageItemDiv key={index}> {element.props.children} </PageItemDiv>
  ));

  return <PageItemContainerDiv> {childrenDivs} </PageItemContainerDiv>;
};

export default PageItemContainer;

