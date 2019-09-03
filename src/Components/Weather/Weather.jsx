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
      data: {}
    };
  }

  async componentDidMount() {

    const city = 'Neath';
    const openMapUrl = `http://api.openweathermap.org/data/2.5/find?q=${city}&type=like&units=metric&APPID=${APIKEY}`;
    const _self = this;

    async function getWeather() {
      
      try {
        const response = await axios.get(openMapUrl);
        console.log(response);

        if(response.data.code === 200) {
          _self.setState({
            isLoaded: true,
            data: response.data
          });
        }

      } catch (error) {
        _self.setState({
          isLoaded: false,
          error
        });
      }
    }
    getWeather();
  }

  render() {
    const { error, isLoaded, days } = this.state;

    return (
      <div>
        <h3>Open weather map</h3>
        <p>{error}</p>
        <p>{isLoaded}</p>
        <p>{days}</p>
      </div>
    );
  }
 
}

export default Weather;