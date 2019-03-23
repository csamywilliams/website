import React, { Component } from 'react';
import styled from 'styled-components';
import IntroPosts from '../IntroPosts/IntroPosts';
import { PrimaryButton } from '../UIComponents/UIComponents';

const Page = styled.section`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-wrap: nowrap;
`;

const AboutSection = styled.section`
  margin: 0 auto;
  padding: 2%;
`;

class MainPage extends Component {
 
  render() {

    return (
        <Page>
          <AboutSection>
            <h2>About Me</h2>
            <p>Hello, my name is Amy. I am a Front end web developer and beginner gardener. I have recently moved to a small holding farm and this is my journey to becoming an established gardener.</p>
            <p>I want to share with the World, all the lessons learnt, tips and tricks whilst growing beautiful flowers and home grown vegetables.</p>
            <PrimaryButton>Read more</PrimaryButton>
          </AboutSection>
        </Page>
    );
  }
 
}

export default MainPage;