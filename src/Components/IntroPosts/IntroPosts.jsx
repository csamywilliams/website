import React, { Component } from 'react';
import { Layout, Flex, ImageLink, Image, ItemA, ItemB } from './IntroPosts.styles';
import BlogImage from '../../Assets/Images/blog.png';
import ReviewsImage from '../../Assets/Images/reviews.png';
import GalleryImage from '../../Assets/Images/gallery.png';
import InfoImage from '../../Assets/Images/little-things.png';

class IntroPosts extends Component {
 
  render() {

    return (
       <Layout>
        <Flex>
          <ItemA>
            <ImageLink href="#">
              <Image src={BlogImage} alt="text"/>
            </ImageLink>
          </ItemA>
          <ItemA>
            <ImageLink href="#">
              <Image src={GalleryImage} alt="text"/>
            </ImageLink>
          </ItemA>
        </Flex>
        <Flex>
          <ItemB>
            <ImageLink href="#">
              <Image src={BlogImage} alt="text"/>
            </ImageLink>
          </ItemB>
          <ItemB>
            <ImageLink href="#"> 
              <Image src={GalleryImage} alt="text"/>
            </ImageLink>
          </ItemB>
          <ItemB>
            <ImageLink href="#"> 
              <Image src={ReviewsImage} alt="text"/>
            </ImageLink>
          </ItemB>
        </Flex>
      </Layout>
    );
  }
 
}

export default IntroPosts;