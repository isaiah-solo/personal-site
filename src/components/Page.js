import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom'

import styled from 'styled-components';

const PageDiv = styled.div`
  display: block;
  padding: 52px 0px 20px 0px;
  width: auto;

  @media screen and (max-width: 1000px) {
    padding: 52px 0px 0px 0px;
  }
`;

const Page = ({routes}) => {
  const {notFound, pages} = routes;
  const allRoutes = [...pages, notFound];
  return (
    <PageDiv>
      <Switch>
        {
          allRoutes.map(
            ({component, path}, index) => {
              const componentProp = index < allRoutes.length ? {component} : {render: component}; 
              return <Route exact path={path} {...componentProp} key={index} />;
            }
          )
        }
      </Switch>
    </PageDiv>
  );
}

export default Page;
