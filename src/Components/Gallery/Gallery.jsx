import React, { Component } from 'react';
import { Layout } from './Gallery.styles';
import { ImageHexagon } from '../UIComponents/UIComponents';

import image1 from './imgs/flowers1.jpg';
import image2 from './imgs/flowers2.jpg';
import image3 from './imgs/flowers3.jpg';
import image4 from './imgs/flowers4.jpg';
import image5 from './imgs/flowers5.jpg';
import image6 from './imgs/flowers6.jpg';
import image7 from './imgs/flowers7.jpg';
import image8 from './imgs/flowers8.jpg';


class Gallery extends Component {
 
  render() {

    const images = [ image1, image2, image3, image4, image5, image6, image7, image8];

    const previews = images.map((image, id) => {
        return <ImageHexagon key={id} style={ { backgroundImage: `url(${image})` } }></ImageHexagon>;
    });

    return (
       <Layout>
           { previews }
      </Layout>
    );
  }
 
}

export default Gallery;