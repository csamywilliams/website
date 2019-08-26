import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { MainPageLayout, SocialMediaLayout } from './KeepInTouch.styles';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import theme from '../../theme';

class KeepInTouch extends Component {

  render() {

    const iconSize = this.props.size ? this.props.size :  theme.main.icons.contact.size;
    const iconColor = this.props.color ? this.props.color :  theme.main.icons.contact.color;
    const Layout = this.props.layout ? this.props.layout :  MainPageLayout;

    return (
      <div>
      <IconContext.Provider value={{ size: iconSize, color: iconColor  }}>
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