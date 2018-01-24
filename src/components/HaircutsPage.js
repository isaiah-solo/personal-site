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

  mouseEnterCarousel = () => {
    console.log('test');
  }

  scroll(e) {
    window.scrollBy(100, 0)
  }

  render() {

    return (
      <div>
        <div className='PageItem'>
          <div className='PageTitleText'> Take a look at some of my haircuts below! </div>
        </div>
        <Carousel images={this.state.images} onMouseEnter={this.mouseEnterCarousel} />
        <div className='PageButton'>
          <div className='PageTitleText'> Schedule a haircut </div>
        </div>
      </div>
    );
  }
}

