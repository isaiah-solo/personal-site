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
  const pageRoutes = pages.map(({component, path}, index) => {
    return <Route exact path={path} component={component} key={path} />;
  });

  if (notFound) {
    pageRoutes.push(<Route exact path={notFound.path} render={notFound.component} key={notFound.path} />);
  }

  return (
    <PageDiv>
      <Switch>
        {pageRoutes}
      </Switch>
    </PageDiv>
  );
}

export default Page;
