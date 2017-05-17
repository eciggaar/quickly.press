import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Heading from './Heading';
import './Settings.css';

class Settings extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { store } = this.props;
    store.buttons.fetch()
  }

  render() {
    const { store } = this.props;
    const { buttons } = store;
    const button = buttons.get(1);

    if (buttons.isRequest('fetching') || !button) {
      return (
        <p>Loading settings ...</p>
      )
    }

    return (
      <div className="Settings">
        <Heading subtitle="Change your personal panic button settings">
          Settings
        </Heading>

        <section>
          <div className="field">
            <label className="label">Panic button UUID</label>
            <p className="control">
              <input className="input" type="text" value={button.get('button_uuid')} onChange={(e) => {
                button.set('uuid', e.target.value);
              }} onBlur={() => {
                button.save({ button_uuid: button.get('button_uuid') })
              }}/>
            </p>
          </div>

          <div className="field">
            <label className="label">Your address</label>
            <p className="control">
              <input className="input" type="text" value={button.get('address')} onChange={(e) => {
                button.set('address', e.target.value);
              }} onBlur={() => {
                button.save({ address: button.get('address') })
              }}/>
            </p>
          </div>

          <div className="field">
            <label className="label">Phone number</label>
            <p className="control has-icons-left">
              <input className="input" type="email" value={button.get('phone_number')} onChange={(e) => {
                button.set('phone_number', e.target.value);
              }} onBlur={() => {
                button.save({ phone_number: button.get('phone_number') })
              }}/>
              <span className="icon is-small is-left">
                <i className="fa fa-phone"></i>
              </span>
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default inject('store')(observer(Settings));
