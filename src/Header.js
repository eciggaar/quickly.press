import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              [logo]
            </a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-tab">
              <figure className="image is-16x16" style={{ marginRight: '8px'}}>
                <img src="http://bulma.io/images/jgthms.png" alt="User"/>
              </figure>
              User name
            </a>
            <a className="nav-item is-tab">Log out</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;