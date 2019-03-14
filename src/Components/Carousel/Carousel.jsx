import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
 
class Carousel extends Component {
 
  render() {
 
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
      }
    ]

    const props = {
      items: images,
      showThumbnails: false,
      showBullets: true,
      showFullscreenButton: false,
    }
 
    return (
      <ImageGallery {...props }/>
    );
  }
 
}

export default Carousel;