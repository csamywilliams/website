import React, { Component } from 'react';
import SocialMediaBar from './Components/SocialMediaBar/SocialMediaBar';
import HeaderBar from './Components/HeaderBar/HeaderBar';
import './Fonts.css';
import './App.css';
import { formatWithOptions } from 'util';

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
        <header className="App-header"></header>
      </div>
    );
  }
};

export default App;
