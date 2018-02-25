import React, { Component } from 'react';

import Firebase from './Firebase'
import Carousel from './Carousel'

import '../styles/Page.scss';

export default class HaircutsPage extends Component {

  state = {
    images: [],
  }

  componentWillMount() {

    Firebase.zayz.bindToState('haircuts/images', {
      context: this,
      state: 'images',
    });
  }

  render() {

    return (
      <div>
        <Carousel images={this.state.images} />
        <div className='PageButton'>
          <div className='PageTitleText'> Schedule a haircut </div>
        </div>
      </div>
    );
  }
}

