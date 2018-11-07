import React from 'react';
import PageItem from '../components/PageItem';

import { TextLarge, TextSmall } from '../components/Text';

export default class BlogPage extends React.Component {
  state = {
  }

  render() {
    const {posts} = this.state;
    const postDivs = (posts || []).map(({body, title}, index) => {
      return (
        <PageItem key={index}>
          <TextLarge>
            {title}
          </TextLarge>
          {
            body.map(({text}, index) =>
              <TextSmall key={index}>
                {text}
              </TextSmall>
            )
          }
        </PageItem>
      );
    });
    return (
      <React.Fragment>
        {postDivs}
      </React.Fragment>
    );
  }
}

