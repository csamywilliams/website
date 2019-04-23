import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { Layout } from './KeepInTouch.styles';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import theme from '../../theme';

class KeepInTouch extends Component {

  render() {

    const iconColor = theme.main.icons.color;

    return (
      <div>
      <IconContext.Provider value={{ size: "2em", color: iconColor  }}>
          <Layout>
            <a href="/"><FaFacebookF/></a>
            <a href="/"><FaTwitter/></a>
            <a href="/"><FaInstagram/></a>
            <a href="/"><FaEnvelope/></a>
          </Layout>
      </IconContext.Provider>
      </div>
    );
  }
 
}

export default KeepInTouch;