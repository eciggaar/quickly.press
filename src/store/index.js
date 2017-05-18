import { apiClient } from 'mobx-rest'
import adapter from 'mobx-rest-fetch-adapter'
import { Family, Buttons, Schedules, Government } from './apis'

class Store {
  family;
  buttons;
  schedules;
  government;

  constructor() {
    this.family = new Family();
    this.buttons = new Buttons();
    this.schedules = new Schedules();
    this.government = new Government();
  }

}

apiClient(adapter, { apiPath: '/api' })
export default new Store();
