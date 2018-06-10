import React from 'react';
import PageItem from '../components/PageItem'

import { TextLarge, TextSmall } from '../components/Text'

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
    const postList = posts.map(post => {
      const title = post.title || "";
      const body = post.body || [];

      const content = body.map(paragraph =>
        <TextSmall key={ paragraph.text }> { paragraph.text || "" } </TextSmall>
      );

      return (
        <PageItem key={ title + content }>
          <TextLarge> { title } </TextLarge>
          { content }
        </PageItem>
      );
    });

    return postList;
  }

  render() {
    const posts = this.popPosts(this.state.posts);

    return <div> { posts } </div>;
  }
}

