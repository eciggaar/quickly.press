import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Schedule extends Component {

  constructor(props) {
    super(props);
    const { schedule } = props
    this.state = {
      edit: false,
      start: schedule.get('start'),
      end: schedule.get('end')
    }
  }

  render() {
    const { edit, start, end } = this.state;
    const { schedule } = this.props;

    if (edit) {
      return (
        <tr>
          <td><input className="input" value={start} onChange={(e) => {
            this.setState({ start: e.target.value })
          }} /></td>
          <td><input className="input" value={end} onChange={(e) => {
            this.setState({ end: e.target.value })
          }} /></td>
          <td>
            <a className="button is-white is-primary" onClick={async () => {
              await schedule.save({ start, end })
              this.setState({ edit: false })
            }}>
              <span>Done</span>
              <span className="icon is-small">
                <i className="fa fa-check"></i>
              </span>
            </a>
          </td>
        </tr>
      )
    }

    return (
      <tr>
        <td>{schedule.get('start')}</td>
        <td>{schedule.get('end')}</td>
        <td>
          <a className="button is-white" onClick={() => {
            this.setState({ edit: true })
          }}>
            <span>Edit</span>
            <span className="icon is-small">
              <i className="fa fa-edit"></i>
            </span>
          </a>
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
  }
}

export default observer(Schedule)
