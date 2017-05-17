import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Schedule from './Schedule';
import Heading from './Heading';

class Schedules extends Component {
  constructor() {
    super();
    this.state = {
      start: null,
      end: null
    }
  }

  componentWillMount() {
    const { store } = this.props;
    store.schedules.fetch();
  }

  render() {
    const { store } = this.props;
    const { schedules } = store;

    if (schedules.isRequest('fetching')) {
      return (
        <p>Loading schedules ...</p>
      )
    }

    const { state } = this;

    return (
      <div className="Family">
        <Heading subtitle="Edit schedules that you can add to users for specific timed events">
          Schedules
        </Heading>

        <table className="table">
          <colgroup width={100} />
          <colgroup width={100} />
          <colgroup width={100} />
          <tbody>
            {schedules.models.map(schedule => <Schedule key={schedule.id} schedule={schedule} />)}
          </tbody>
        </table>

        <section>
          <div className="field">
            <label className="label">Begintime</label>
            <p className="control has-icons-left">
              <input className="input" type="text" placeholder="Begintime" value={state.start || ""} onChange={(e) => {
                this.setState({ start: e.target.value });
              }}/>
              <span className="icon is-small is-left">
                <i className="fa fa-clock-o"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Endtime</label>
            <p className="control has-icons-left">
              <input className="input" type="text" placeholder="Endtime" value={state.end || ""} onChange={(e) => {
                this.setState({ end: e.target.value });
              }}/>
              <span className="icon is-small is-left">
                <i className="fa fa-clock-o"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-primary" disabled={!state.start || !state.end} onClick={() => {
                const { start, end } = state
                schedules.create({
                  start,
                  end,
                  emergency_button_client: 'http://localhost:8005/api/buttons/1',
                  family_member: 'http://localhost:8005/api/families/1'
                })
                this.setState({
                  start: null,
                  end: null
                })
              }}>Submit</button>
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default inject('store')(observer(Schedules));
