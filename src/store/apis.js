import { Model, Collection } from 'mobx-rest';
import { extendObservable } from 'mobx';
import rootStore from './index';

class Member extends Model {
  constructor(data) {
    super(data);
    extendObservable(this, {
      get schedules() {
        return rootStore.schedules.filter({
          family_member: this.id
        })
      }
    })
  }
}

class Settings extends Model {

}

class Schedule extends Model {

}

class GovernmentMember extends Model {

}

class Family extends Collection {
  url() {
    return '/families';
  }

  model() {
    return Member;
  }

}

class Government extends Collection {
  url() {
    return '/services';
  }

  model() {
    return GovernmentMember;
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

class Schedules extends Collection {
  url() {
    return '/schedules';
  }

  model() {
    return Schedule;
  }

}

export {
  Schedules,
  Family,
  Government,
  Buttons
}