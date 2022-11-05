import {makeAutoObservable} from 'mobx'

class HtmlStates{
    activeMenu
    constructor() {
        this.activeMenu= true
        makeAutoObservable(this)
    }
    toggleActiveMenu(){
        this.activeMenu = !this.activeMenu
    }
}


export default new HtmlStates()