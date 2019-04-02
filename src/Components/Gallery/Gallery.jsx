import React, { Component } from 'react';
import { Layout } from './Gallery.styles';
import { Hexagon } from '../UIComponents/UIComponents';
import BlogImage from '../../Assets/Images/blog.png';
import ReviewsImage from '../../Assets/Images/reviews.png';
import GalleryImage from '../../Assets/Images/gallery.png';
import InfoImage from '../../Assets/Images/little-things.png';

class Gallery extends Component {
 
  render() {

    const images = [ BlogImage, ReviewsImage, GalleryImage, InfoImage, BlogImage, ReviewsImage, GalleryImage, InfoImage];

    const previews = images.map((image, id) => {
        return <Hexagon key={id}></Hexagon>;
    });

    return (
       <Layout>
           { previews }
      </Layout>
    );
  }
 
}

export default Gallery;