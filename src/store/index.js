import { action } from 'mobx';
import { apiClient, Model, Collection } from 'mobx-rest'
import adapter from 'mobx-rest-fetch-adapter'

class Member extends Model {

}

class Settings extends Model {

}

class Schedule extends Model {
  
}

class Family extends Collection {
  url() {
    return '/families';
  }

  model() {
    return Member;
  }
}

class Buttons extends Collection {
  url() {
    return '/buttons';
  }

  model() {
    return Settings;
  }

  // @action getById(id) {
  //   const model = this.model();
  //   const instance = new model({ id })
  //   instance.fetch()
  // }
}

class Schedules extends Collection {
  url() {
    return '/schedules';
  }

  model() {
    return Schedule;
  }
}

class Store {
  family;
  buttons;
  schedules

  constructor() {
    this.family = new Family();
    this.buttons = new Buttons();
    this.schedules = new Schedules();
  }

}

apiClient(adapter, { apiPath: '/api' })
export default new Store();
