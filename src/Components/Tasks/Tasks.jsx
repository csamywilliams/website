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

    const tasks = [
      "During warm weather ensure plants have been watered.",
      "With Winter approaching learn your frost dates.",
      "Stay close to water, when deciding where to plant.",
      "Follow the Sun!",
      "Do your research"
    ]

    const taskList = tasks.map(function(task, idx){
      return <div key={idx}>
        <h4>{task}</h4>
      </div>;
    })

    return (
      <div>
        <Slider {...settings}>
          {taskList}
        </Slider>
      </div>
    );
  }
 
}

export default Tasks;