import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Member from './Member';
import './Family.css';

class Family extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      phone_number: null
    }
  }

  componentWillMount() {
    const { store } = this.props;
    store.family.fetch();
  }

  render() {
    const { store } = this.props;
    const { family } = store;

    if (family.isRequest('fetching')) {
      return (
        <p>Loading users ...</p>
      )
    }

    const { state } = this;

    return (
      <div className="Family">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-spaced">
                Family
              </h1>
              <h2 className="subtitle">
                Edit the people who get notified in case of panic
              </h2>
            </div>
          </div>
        </section>

        <table className="table">
          <colgroup width={100} />
          <colgroup width={100} />
          <colgroup width={100} />
          <tbody>
            {family.models.map(member => <Member key={member.id} member={member} />)}
          </tbody>
        </table>

        <section>
          <div className="field">
            <label className="label">Name</label>
            <p className="control has-icons-left">
              <input className="input" type="text" placeholder="Name" value={state.name || ""} onChange={(e) => {
                this.setState({ name: e.target.value });
              }}/>
              <span className="icon is-small is-left">
                <i className="fa fa-user"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Phone number</label>
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" value={state.phone_number || ""} onChange={(e) => {
                this.setState({ phone_number: e.target.value });
              }}/>
              <span className="icon is-small is-left">
                <i className="fa fa-phone"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fa fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-primary" disabled={!state.name || !state.phone_number} onClick={() => {
                const { name, phone_number } = state
                family.create({
                  name,
                  phone_number
                })
                this.setState({
                  name: null,
                  phone_number: null
                })
              }}>Submit</button>
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default inject('store')(observer(Family));
