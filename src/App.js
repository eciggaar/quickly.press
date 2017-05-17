import React, { Component } from 'react';
import classNames from 'classnames';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={classNames('App', 'container')}>
        <h1>Quickly Press</h1>
      </div>
    );
  }
}

export default App;
