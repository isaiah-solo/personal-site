import React from 'react';

import '../styles/App.css'
import '../styles/Carousel.css';

export default class Carousel extends React.Component {

  state = {
    arrowsShow: false
  }

  onComponentUnmount() {
    clearInterval(this.carouselScrollInterval);
  }

  startAutoScroll = (carousel) => {
    if (carousel === null) {
      return;
    }

    this.scrollCounter = 0;
    this.children = carousel.childNodes.length - 2;
    this.carouselScrollInterval = setInterval(() => {
      if (this.scrollCounter < this.children) {
        carousel.scrollBy({
          'left': 290,
          'top': 0,
          'behavior': 'smooth'
        });
        this.scrollCounter++;
      }
    }, 3000);

    this.scrollLeft = () => {
      carousel.scrollBy({
        'left': -290,
        'top': 0,
        'behavior': 'smooth'
      });
    }

    this.scrollRight = () => {
      carousel.scrollBy({
        'left': 290,
        'top': 0,
        'behavior': 'smooth'
      });
    }
  }

  stopAutoScroll = () => {
    this.children = 0;
    clearInterval(this.carouselScrollInterval);
  }

  showArrows = () => {
    this.setState({arrowsShow: true});
  }

  hideArrows = () => {
    this.setState({arrowsShow: false});
  }

  render() {
    const images = this.props.images;

    let imageList = [];

    for (const image of images) {
      imageList.push(
        <div className='CarouselItem' key={image.name}>
          <img className='CarouselItemImage' alt={image.name} src={image.link} />
        </div>
      );
    }

    return (
      <div className='CarouselPageItem' onMouseEnter={this.showArrows} onMouseLeave={this.hideArrows}>
        <div className='Carousel' onMouseEnter={this.stopAutoScroll} ref={this.startAutoScroll}> {imageList} </div>
        {
          this.state.arrowsShow ?
          <div className='CarouselArrows'>
            <div className='LeftArrow' onClick={this.scrollLeft} />
            <div className='RightArrow' onClick={this.scrollRight} />
          </div>
          : null
        }
      </div>
    );
  }
}

