import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import GovernmentMember from './GovernmentMember';
import Heading from './Heading';
import './Family.css';

class Government extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      phone_number: null
    }
  }

  componentWillMount() {
    const { store } = this.props;
    store.government.fetch();
  }

  render() {
    const { store } = this.props;
    const { government } = store;

    if (government.isRequest('fetching')) {
      return (
        <p>Loading users ...</p>
      )
    }

    const { state } = this;

    return (
      <div className="Family">
        <Heading subtitle="Add and edit homecare, servicenumbers or government-related numbers">
          Government
        </Heading>

        <table className="table">
          <colgroup width={100} />
          <colgroup width={100} />
          <colgroup width={100} />
          <tbody>
            {government.models.map(member => <GovernmentMember key={member.id} member={member} />)}
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
                government.create({
                  name,
                  phone_number,
                  emergency_button_client: 'http://localhost:8005/api/buttons/1',
                  family_member: 'http://localhost:8005/api/families/1'
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

export default inject('store')(observer(Government));
