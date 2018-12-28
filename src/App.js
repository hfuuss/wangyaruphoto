import React, { Component } from 'react';
import GalleryPhoto from './components/GalleryPhoto';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GalleryPhoto></GalleryPhoto>
      </div>
    );
  }
}

export default App;
