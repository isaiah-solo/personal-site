import React from 'react';

import '../styles/App.scss'
import '../styles/Page.scss';

class ImageList extends React.Component {

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
  }

  stopAutoScroll = () => {
    this.children = 0;
    clearInterval(this.carouselScrollInterval);
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
      <div className='Carousel' onMouseEnter={this.stopAutoScroll} ref={this.startAutoScroll}> {imageList} </div>
    );
  }
}

export default class Carousel extends React.Component {

  state = {
    arrowsShow: false
  }

  showArrows = () => {
    this.setState({arrowsShow: true});
  }

  hideArrows = () => {
    this.setState({arrowsShow: false});
  }

  scrollCarouselLeft = () => {
    alert('Test Left');
  }

  scrollCarouselRight = () => {
    alert('Test Right');
  }

  render() {
    return (
      <div className='CarouselPageItem' onMouseEnter={this.showArrows} onMouseLeave={this.hideArrows}>
        <ImageList images={this.props.images} />
        {
          this.state.arrowsShow ?
          <div className='CarouselArrows'>
            <div className='LeftArrow' onClick={this.scrollCarouselLeft} />
            <div className='RightArrow' onClick={this.scrollCarouselRight} />
          </div>
          : null
        }
      </div>
    );
  }
}

