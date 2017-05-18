import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import './App.css';
import Family from './Family';
import Government from './Government';
import Header from './Header';
import Footer from './Footer';
import Settings from './Settings';
import Schedules from './Schedules';

class App extends Component {
  render() {
    return (
      <Router basename="/panic">
        <div className="App">
          <Header/>
          <div className="container">
            <Route exact path="/" component={Dashboard}/>
            <Route path="/family" component={Family}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/schedules" component={Schedules}/>
            <Route path="/government" component={Government}/>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
