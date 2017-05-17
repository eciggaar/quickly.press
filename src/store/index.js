//import { action, computed, observable, extendObservable } from 'mobx';
import { apiClient, Model, Collection } from 'mobx-rest'
import adapter from 'mobx-rest-fetch-adapter'

class User extends Model {

}

class Users extends Collection {
  url() {
    return '/families';
  }

  model() {
    return User;
  }
}

class Store {
  users;

  constructor() {
    this.users = new Users();
  }

}

apiClient(adapter, { apiPath: '/api' })
export default new Store();