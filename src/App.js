import React, { Component } from 'react';
import './App.css';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <h1 className="title">Quickly Press</h1>
          <h2 className="subtitle">Manage your panic button</h2>
        </div>
      </div>
    );
  }
}

export default App;
