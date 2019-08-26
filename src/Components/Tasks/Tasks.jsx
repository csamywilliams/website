import React, { Component } from 'react';
import Slider from "react-slick";
import {  } from './Tasks.styles';
import theme from '../../theme';

class Tasks extends Component {

  render() {

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>During warm weather ensure plants have been watered.</h3>
          </div>
          <div>
            <h3>With Winter approaching learn your frost dates.</h3>
          </div>
          <div>
            <h3>Stay close to water, when deciding where to plant.</h3>
          </div>
          <div>
            <h3>Follow the Sun!</h3>
          </div>
          <div>
            <h3>Do your research</h3>
          </div>
        </Slider>
      </div>
    );
  }
 
}

export default Tasks;