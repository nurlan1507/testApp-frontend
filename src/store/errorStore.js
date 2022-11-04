import {action, computed, makeAutoObservable, makeObservable, observable} from "mobx";

class ErrorStore{
    errors = new Map()
    constructor() {
      makeAutoObservable(this)
    }
    setErrors(errors){
        for (let key in errors){
            this.errors.set(key,errors[key])
        }
        console.log(this.errors)
    }
    get getErrors(){
        return this.errors
    }
}

export default new ErrorStore()