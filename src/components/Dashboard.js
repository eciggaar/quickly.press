import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  family,
  government,
  add_new,
  logo,
  settings
} from './images';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-spaced">
                <img width={500} src={logo} alt="Quickly.press"/>
              </h1>
              <h2 className="subtitle">
                The smart panic-button that lets you send text and soundmessages <br />to anyone you care about, with the single press of a button.
              </h2>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="tile">
              <div className="tile is-bold">
                <Link to="/family"><img src={family} alt="Family"/></Link>
              </div>
              <div className="tile">
                <div className="tile">
                  <Link to="/family"><img src={government} alt="Government"/></Link>
                </div>
              </div>
              <div className="tile">
                <div className="tile">
                  <Link to="/family"><img src={settings} alt="Add new"/></Link>
                </div>
              </div>
              <div className="tile">
                <div className="tile">
                  <Link to="/family"><img src={add_new} alt="Add new"/></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Dashboard;
