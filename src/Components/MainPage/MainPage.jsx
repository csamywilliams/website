import React, { Component } from 'react';
import styled from 'styled-components';
import IntroPosts from '../IntroPosts/IntroPosts';

const Page = styled.section`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-wrap: nowrap;
`;

class MainPage extends Component {
 
  render() {

    return (
        <Page>
             <IntroPosts />
        </Page>
    );
  }
 
}

export default MainPage;