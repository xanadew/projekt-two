import React, { Component } from 'react';
import HashRouter from 'react-router-dom';
import './App.css';
import Shelfie from './components/Shelfie';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Shelfie/>
      </div>
    );
  }
}

export default App;
