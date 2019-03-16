import React, { Component } from 'react';
import { Grid, ImageLink, Image, ItemA, ItemB, ItemC, ItemD } from './IntroPosts.styles';
import PageImage from '../../Assets/Images/flowers.jpg';
import PageImage2 from '../../Assets/Images/garden-portrait.jpeg';

class IntroPosts extends Component {
 
  render() {

    return (
        <Grid>
            <ItemA>
              <ImageLink href="#">
                <Image src={PageImage2} alt="text"/>
              </ImageLink>
            </ItemA>
            <ItemB>
              <ImageLink href="#">
                <Image src={PageImage2} alt="text"/>
              </ImageLink>
            </ItemB>
            <ItemC>
              <ImageLink href="#">
                <Image src={PageImage} alt="text"/>
              </ImageLink>
            </ItemC>
            <ItemD>
              <ImageLink href="#"> 
                <Image src={PageImage} alt="text"/>
              </ImageLink>
            </ItemD>
        </Grid>
    );
  }
 
}

export default IntroPosts;