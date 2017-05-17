import React, { Component } from 'react';

class Family extends Component {
  render() {
    return (
      <div className="container">
        <h1>Family</h1>
        <h2>Edit the people who get notified in case of panic</h2>

        <table className="table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>[edit actions]</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Family;