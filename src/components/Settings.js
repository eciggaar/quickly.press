import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Heading from './Heading';
import './Settings.css';

class Settings extends Component {

  constructor(props) {
    super(props);

    this.state = {
      uuid: '',
      phone_number: '',
      address: ''
    }
  }

  async componentWillMount() {
    const { store } = this.props;
    const model = store.buttons.model();
    const button = new model({ id: 1 });
    await button.fetch();
    this.setState(...button.attributes());
  }

  render() {
    const { store } = this.props;
    const { buttons } = store;

    if (buttons.isRequest('fetching')) {
      return (
        <p>Loading settings ...</p>
      )
    }

    const { state } = this;
    return (
      <div className="Settings">
        <Heading subtitle="Change your personal panic button settings">
          Settings
        </Heading>

        <section>
          <div className="field">
            <label className="label">Panic button UUID</label>
            <p className="control">
              <input className="input" type="text" value={state.uuid || ""} onChange={(e) => {
                this.setState({ uuid: e.target.value });
              }}/>
            </p>
          </div>

          <div className="field">
            <label className="label">Your address</label>
            <p className="control">
              <input className="input" type="text" value={state.address || ""} onChange={(e) => {
                this.setState({ address: e.target.value });
              }}/>
            </p>
          </div>

          <div className="field">
            <label className="label">Phone number</label>
            <p className="control has-icons-left">
              <input className="input" type="email" value={state.phone_number || ""} onChange={(e) => {
                this.setState({ phone_number: e.target.value });
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
