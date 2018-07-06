import React from 'react';
import PageItem from '../components/PageItem';

import { TextLarge, TextSmall } from '../components/Text';

export default class BlogPage extends React.Component {
  state = {
  }

  render() {
    const {posts} = this.state;
    const postDivs = posts && posts.map(({body, title}, index) => {
      const content = body.map(({text}, index) =>
        <TextSmall key={index}> {text} </TextSmall>
      );

      return (
        <PageItem key={index}>
          <TextLarge> {title} </TextLarge>
          {content}
        </PageItem>
      );
    });

    return <React.Fragment> {postDivs} </React.Fragment>;
  }
}

