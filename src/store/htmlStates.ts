import {makeAutoObservable, observable,action} from 'mobx'
export class HtmlStates{
    activeMenu:boolean
    toggleActiveMenu(){
      this.activeMenu = !this.activeMenu
    }
    constructor() {
        this.activeMenu= true
        makeAutoObservable(this)
    }
}
