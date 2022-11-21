import  {ErrorStore} from './errorStore'
import {UserStore} from './userStore'
import {HtmlStates} from './htmlStates'
import {TestStore} from './testStore'
import {observable} from 'mobx'
class RootStore{
  @observable errorStore :ErrorStore;
  @observable userStore: UserStore;
  @observable htmlStates:HtmlStates;
  @observable testStore: TestStore;
  constructor(){
    this.errorStore = new ErrorStore();
    this.userStore = new UserStore();
    this.htmlStates = new HtmlStates();
    this.testStore = new TestStore();
  }
}


export default new RootStore()
