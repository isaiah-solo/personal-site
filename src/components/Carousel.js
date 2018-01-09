import React, { Component } from 'react';

import '../styles/App.scss'
import '../styles/Page.scss';

const ImageList = (props) => {
  const images = props.images;

  let imageList = [];

  for (const image of images) {
    imageList.push(<img className='CarouselItem' key={image.name} src={image.link} />);
  }

  return (
    <div className='Carousel'> {imageList} </div>
  );
}

class Carousel extends Component {

  render() {

    return (
      <ImageList images={this.props.images} />
    );
  }
}

export default Carousel;
