import React, { Component } from 'react';
import { Layout } from './PageFooter.styles';

class PageFooter extends Component {

  render() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <Layout>
          <p>&copy; { year } Bees of Bryncoch - Amy Williams. All rights reserved. </p>
        </Layout>
    );
  }
 
}

export default PageFooter;