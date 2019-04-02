import React, { Component } from 'react';

class PageFooter extends Component {

  render() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
          <p>&copy; { year } Bees of Bryncoch - Amy Williams. All rights reserved. </p>
        </footer>
    );
  }
 
}

export default PageFooter;