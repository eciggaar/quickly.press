import React, { Component } from 'react';
import './Family.css';

class Family extends Component {
  render() {
    return (
      <div className="Family">
        <h1 className="title">Family</h1>
        <h2 className="subtitle">Edit the people who get notified in case of panic</h2>

        <table className="table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>[edit actions]</td>
            </tr>
          </tbody>
        </table>

        <section>
          <div className="field">
            <label className="label">Name</label>
            <p className="control has-icons-left">
              <input className="input" type="text" placeholder="Name"/>
              <span className="icon is-small is-left">
                <i className="fa fa-user"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">E-mail address</label>
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email"/>
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fa fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-primary">Submit</button>
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default Family;