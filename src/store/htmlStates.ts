import {makeAutoObservable, observable,action} from 'mobx'
export class HtmlStates{
    @observable activeMenu:boolean
    @action toggleActiveMenu(){
      this.activeMenu = !this.activeMenu
    }
    constructor() {
        this.activeMenu= true
        makeAutoObservable(this)
    }
}
