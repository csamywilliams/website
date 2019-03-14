import React, { Component } from 'react';
import SocialMediaBar from './Components/SocialMediaBar/SocialMediaBar';
import HeaderBar from './Components/HeaderBar/HeaderBar';
import PostPreview from './Components/PostPreview/PostPreview';
import './Fonts.css';
import './App.css';

// const colors = {
//   sage: "#60AB68",
//   green: "#8EBE68",
//   pink: "#F6C3A8",
//   fuschia: "#E91E87",
//   paleyellow: "#E7D980"
// };

class App extends Component {
  render() {
    return (
      <div className="App">
        <SocialMediaBar />
        <HeaderBar />
        {/* <PostPreview /> */}
      </div>
    );
  }
};

export default App;
