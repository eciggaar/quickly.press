import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class Schedule extends Component {
  componentWillMount() {
    const { store } = this.props;
    store.schedules.fetch();
  }

  render() {
    const { store, match } = this.props;
    const { familyId } = match.params;

    const member = store.family.get(+familyId);

    const schedules = member.schedules;

    if (!schedules) {
      return (
        <div>
          Loading ...
        </div>
      )
    }

    return (
      <div>
        <table className="table">
          <colgroup width={100} />
          <colgroup width={100} />
          <colgroup width={100} />
          <tbody>
            {schedules.map(schedule => {
              return (
                <tr key={schedule.id}>
                  <td>
                    <input className="input" value={schedule.get('start')} onChange={(e) => {
                      schedule.set({ start: e.target.value })
                    }} onBlur={() => {
                      schedule.save({ start: schedule.get('start') })
                    }} />
                  </td>
                  <td>
                    <input className="input" value={schedule.get('end')} onChange={(e) => {
                      schedule.set({ end: e.target.value })
                    }} onBlur={() => {
                      schedule.save({ end: schedule.get('end') })
                    }}/>
                  </td>
                  <td>
                    <a className="button is-white is-danger" onClick={() => {
                      schedule.destroy();
                    }}>
                      <span>Remove</span>
                      <span className="icon is-small">
                        <i className="fa fa-times"></i>
                      </span>
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">
                <a className="button is-white is-info" onClick={() => {
                  store.schedules.create({
                    start: '0:00',
                    end: '0:00',
                    emergency_button_client: 1,
                    family_member: member.id
                  })
                }}>
                  <span>Add row</span>
                  <span className="icon is-small">
                    <i className="fa fa-plus"></i>
                  </span>
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

export default inject('store')(observer(Schedule));