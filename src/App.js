import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Family from './Family';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router basename="/panic">
        <div className="App">
          <Header/>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/family" component={Family}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
