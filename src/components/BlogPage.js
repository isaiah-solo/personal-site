import React from 'react';
import PageItem from '../components/PageItem';
import styled from 'styled-components';

import { TextLarge, TextSmall } from '../components/Text';

const BlogPageDiv = styled.div`
  font-family: Verdana;
  line-height: 21px;
`;

export default class BlogPage extends React.Component {
  state = {
    posts: [
      {
        title: "My Worst Mistake",
        body: [
          {
            text: "Was performing a join in production at night (already bad sign) because had to import data a table at a time. Found out in the morning that my join had caused the application to throw 500 errors for every user. I basically took responsibility, Docusign integration and web hook. So heavily integrated with Salesforce, no error logs to debug from, not a lot of documentation or community support forums, silent errors, access logs not being hit, manually coded because client doesn’t support the low PHP version we support.",
          },
          {
            text: "Eventually realized it was our own app's request filtering that prevented POST requests from accessing. Was able to debug better and fixed issue."
          },
        ]
      }
    ]
  }

  popPosts = (posts = []) => {
    const postList = posts.map(({body, title}, index) => {
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

    return postList;
  }

  render() {
    const posts = this.popPosts(this.state.posts);

    return <BlogPageDiv> {posts} </BlogPageDiv>;
  }
}

