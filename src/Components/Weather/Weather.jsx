import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import theme from '../../theme';

const APIKEY = 'test';
const axios = require('axios');

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      days: []
    };
  }

  async componentDidMount() {

    const city = 'Neath';
    const openMapUrl = `http://api.openweathermap.org/data/2.5/find?q=${city}&type=like&units=metric&APPID=${APIKEY}`;

    async function getWeather() {
      try {
        
        const response = await axios.get(openMapUrl);
        const data = await response;

        return data;
        
      } catch(error) {
        console.log(error);
      }

    
    }
    getWeather().then((weather) => {
      this.setState({
        days: weather
      });
    });
  }

  render() {
    const { days } = this.state;

    return (
      <div>
        <h3>Open weather map</h3>
        <p>{days.toString()}</p>
      </div>
    );
  }
 
}

export default Weather;