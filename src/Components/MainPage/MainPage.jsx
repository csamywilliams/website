import React, { Component } from 'react';
import styled from 'styled-components';
import BlogPosts from '../BlogPosts/BlogPosts';
import Gallery from '../Gallery/Gallery';
import { PrimaryButton } from '../UIComponents/UIComponents';
import KeepInTouch from '../KeepInTouch/KeepInTouch';

const Section = styled.section`
  margin: 0 auto;
  padding: 2%;
`;

const WeatherSection = styled.section`
  height: 20vh;
  min-height: 200px;
  background-color: ${props => props.theme.section.weather.bg};
  color: ${props => props.theme.section.weather.white};

  h2 {
    padding-top: 1%;
  }
`;

const BlogSection = styled.section`
  height: 40vh;
  min-height: 400px;
  background-color: ${props => props.theme.section.weather.bg};
  color: ${props => props.theme.section.weather.white};

  h2 {
    padding-top: 1%;
  }
`;

class MainPage extends Component {

  render() {

    return (
        <main>
          <Section>
            <h2>About Me</h2>
            <p>Hello, my name is Amy. I am a Front end web developer and beginner gardener. I have recently moved to a small holding farm and this is my journey to becoming an established gardener.</p>
            <p>I want to share with the World, all the lessons learnt, tips and tricks whilst growing beautiful flowers and home grown vegetables.</p>
            <PrimaryButton>Read more</PrimaryButton>
          </Section>
          <WeatherSection>
            <h2>Today's Weather Forecast</h2>
          </WeatherSection>
          <Section>
            <h2>My Stories</h2>
            <BlogPosts />
          </Section>
          <BlogSection>
            <h2>Gallery</h2>
            <Gallery />
          </BlogSection>
          <Section>
            <h2>Keep in touch</h2>
            <KeepInTouch />
          </Section>
        </main>
    );
  }
 
}

export default MainPage;