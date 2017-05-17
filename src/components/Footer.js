import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>Quickly.press</strong> by <a href="http://wearespindle.com/">Spindle</a>.
              The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            </p>
            <p>
              <a className="icon" href="https://github.com/wearespindle/quickly.press">
                <i className="fa fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;