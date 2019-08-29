import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';
import BlogPosts from '../BlogPosts/BlogPosts';
import Gallery from '../Gallery/Gallery';
import Tasks from '../Tasks/Tasks';
import { PrimaryButton } from '../UIComponents/UIComponents';
import KeepInTouch from '../KeepInTouch/KeepInTouch';

const EvenSection = styled.section`
  margin: 0 auto;
  padding: 2%;
`;

const OddSection = styled.section`
  background-color: ${props => props.theme.section.odd.bg};
  color: ${props => props.theme.section.odd.white};
  padding: 10px;
`;

class MainPage extends Component {

  render() {

    return (
        <main>
          <EvenSection>
            <h2>About Me</h2>
            <p>Hello, my name is Amy. I am a Front end web developer and beginner gardener. I have recently moved to a small holding farm and this is my journey to becoming an established gardener.</p>
            <p>I want to share with the World, all the lessons learnt, tips and tricks whilst growing beautiful flowers and home grown vegetables.</p>
            <PrimaryButton>Read more</PrimaryButton>
          </EvenSection>
          <OddSection>
            <h2>My Stories</h2>
            <BlogPosts />
          </OddSection>
          <EvenSection>
            <h2>Today's Weather Forecast</h2>
          </EvenSection>
          <OddSection>
            <h2>Gallery</h2>
            <Gallery />
          </OddSection>
          <EvenSection>
            <h2>Keep in touch</h2>
            <KeepInTouch />
            <Tasks />
          </EvenSection>
        </main>
    );
  }
 
}

export default MainPage;