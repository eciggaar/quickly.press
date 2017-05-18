import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class Member extends Component {

  constructor(props) {
    super(props);
    const { member } = props
    this.state = {
      edit: false,
      name: member.get('name'),
      phone_number: member.get('phone_number')
    }
  }

  render() {
    const { edit, name, phone_number } = this.state;
    const { member } = this.props;

    if (edit) {
      return (
        <tr>
          <td><input className="input" value={name} onChange={(e) => {
            this.setState({ name: e.target.value })
          }} /></td>
          <td><input className="input" value={phone_number} onChange={(e) => {
            this.setState({ phone_number: e.target.value })
          }} /></td>
          <td>
            <a className="button is-white is-primary" onClick={async () => {
              await member.save({ name, phone_number })
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
      <tr className={classNames({
        'is-selected': false
      })}>
        <td><Link to={`/family/${member.id}`}>{member.get('name')}</Link></td>
        <td>{member.get('phone_number')}</td>
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
            member.destroy();
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

export default observer(Member)