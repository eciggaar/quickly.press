import { apiClient } from 'mobx-rest'
import adapter from 'mobx-rest-fetch-adapter'
import { Family, Buttons, Schedules, Government } from './apis'
import { extendObservable } from 'mobx';

class Store {
  family;
  buttons;
  schedules;
  government;

  constructor() {
    extendObservable(this, {
      active: false
    });
    this.family = new Family();
    this.buttons = new Buttons();
    this.schedules = new Schedules();
    this.government = new Government();
  }

}

apiClient(adapter, { apiPath: '/api' })
export default new Store();
