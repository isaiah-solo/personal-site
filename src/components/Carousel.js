import React, { Component } from 'react';

import '../styles/App.scss'
import '../styles/Page.scss';

class Carousel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //url: this.props.url
    }    
  }

  /**
   * Render
   */
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
