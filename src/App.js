import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import SocialMediaBar from './Components/SocialMediaBar/SocialMediaBar';
import HeaderBar from './Components/HeaderBar/HeaderBar';
import MainPage from './Components/MainPage/MainPage';
import PageFooter from './Components/PageFooter/PageFooter';
import theme from "./theme";
import './Fonts.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme.main}>
          <div>
            <SocialMediaBar />
            <HeaderBar />
            <MainPage />
            <PageFooter />
          </div>
        </ThemeProvider>
      </div>
      
    );
  }
};

export default App;
