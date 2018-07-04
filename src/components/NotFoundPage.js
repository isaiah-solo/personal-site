import React from 'react';

import PageItem from '../components/PageItem';

import { TextLarge } from '../components/Text';

const NotFoundPage = props => (
  <PageItem>
    <TextLarge>
      {"Sorry! What you are looking for cannot be found. Maybe try again soon?"}
    </TextLarge>
  </PageItem>
);

export default NotFoundPage;
