import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import family from './family.svg';
import government from './government.svg';
import add_new from './add_new.svg';
import logo from './logo.svg';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                <img width={500} src={logo} alt="Quickly.press"/>
              </h1>
              <h2 className="subtitle">
                The smart panic-button that lets you send text and soundmessages <br />to anyone you care about, with the single press of a button.
              </h2>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="tile">
              <div className="tile">
                <Link to="/family"><img src={family} alt="Family"/></Link>
              </div>
              <div className="tile">
                <div className="tile">
                  <Link to="/family"><img src={government} alt="Family"/></Link>
                </div>
              </div>
              <div className="tile">
                <div className="tile">
                  <Link to="/family"><img src={add_new} alt="Family"/></Link>
                </div>
              </div>
              <div className="tile">
                <div className="tile">
                  <Link to="/family"><img src={add_new} alt="Family"/></Link>
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
