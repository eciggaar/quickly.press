import { action } from 'mobx';
import { apiClient, Model, Collection } from 'mobx-rest'
import adapter from 'mobx-rest-fetch-adapter'

class Member extends Model {

}

class Settings extends Model {

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
}

class Store {
  family;
  buttons;

  constructor() {
    this.family = new Family();
    this.buttons = new Buttons();

  }



}

apiClient(adapter, { apiPath: '/api' })
export default new Store();
