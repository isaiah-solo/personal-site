import React, { Component } from 'react';

import '../styles/App.scss'
import '../styles/Page.scss';

class Carousel extends Component {
  render() {
    return (
      <div className="Carousel">
        <img className="CarouselItem" src={require('../images/randbox.png')} />
        <img className="CarouselItem" src={require('../images/randbox.png')} />
        <img className="CarouselItem" src={require('../images/randbox.png')} />
        <img className="CarouselItem" src={require('../images/randbox.png')} />
        <img className="CarouselItem" src={require('../images/randbox.png')} />
        <img className="CarouselItem" src={require('../images/randbox.png')} />
      </div>
    );
  }
}

export default Carousel;
