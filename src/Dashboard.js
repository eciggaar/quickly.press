import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Quickly Press</h1>
        <h2 className="subtitle">Manage your panic button</h2>
        <div className="tile is-ancestor">
          <div className="tile">
            <Link to="/family">Family</Link>
          </div>
          <div className="tile">
            [link]
          </div>
          <div className="tile">
            [link]
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;