import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route } from 'react-router-dom';
import Member from './Member';
import Heading from './Heading';
import Schedule from './Schedule';
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
    const { store, match } = this.props;
    const { family } = store;

    if (family.isRequest('fetching')) {
      return (
        <p>Loading users ...</p>
      )
    }

    const { state } = this;

    return (
      <div className="Family">
        <Heading subtitle="Edit the people who get notified in case of panic">
          Family
        </Heading>

        <div className="columns">
          <div className="column">
            <table className="table">
              <colgroup width={100} />
              <colgroup width={100} />
              <colgroup width={100} />
              <tbody>
                {family.models.map(member => <Member key={member.id} match={match} member={member}/>)}
              </tbody>
            </table>
          </div>
          <div className="column">
            <Route path={`${match.url}/:familyId`} component={Schedule}/>
          </div>
        </div>

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
              <button className="button is-success" disabled={!state.name || !state.phone_number} onClick={() => {
                const { name, phone_number } = state
                family.create({
                  name,
                  phone_number,
                  emergency_button_client: 'http://localhost:8005/api/buttons/1',
                  email: 'info@example.com'
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
