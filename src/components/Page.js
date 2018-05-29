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

const Page = props => {
  const routes = props.routes || {};
  const pages = routes.pages || [];
  const pageRoutes = pages.map(page => {
    return <Route exact path={ page.path } component={ page.component } key={ page.path } />;
  });

  if (routes.notFound) {
    pageRoutes.push(<Route exact path={ routes.notFound.path } render={ routes.notFound.component } key={ routes.notFound.path } />);
  }

  return (
    <PageDiv>
      <Switch>
        { pageRoutes }
      </Switch>
    </PageDiv>
  );
}

export default Page;
