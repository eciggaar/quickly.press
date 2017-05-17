//import { action, computed, observable, extendObservable } from 'mobx';
import { apiClient, Model, Collection } from 'mobx-rest'
import adapter from 'mobx-rest-fetch-adapter'

class Member extends Model {

}

class Family extends Collection {
  url() {
    return '/families';
  }

  model() {
    return Member;
  }
}

class Store {
  family;

  constructor() {
    this.family = new Family();
  }

}

apiClient(adapter, { apiPath: 'http://localhost:3001' })
export default new Store();