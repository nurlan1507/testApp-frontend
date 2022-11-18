import  {ErrorStore} from './errorStore'
import {UserStore} from './userStore'
import {HtmlStates} from './htmlStates'
import {TestStore} from './testStore'
class RootStore{
  errorStore :ErrorStore;
  userStore: UserStore;
  htmlStates:HtmlStates;
  testStore: TestStore;
  constructor(){
    this.errorStore = new ErrorStore();
    this.userStore = new UserStore();
    this.htmlStates = new HtmlStates();
    this.testStore = new TestStore();
  }
}


export default new RootStore()
