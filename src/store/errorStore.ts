import {toJS, observable, action } from "mobx";


interface IError {
  errors : Map<string,string>
}
export class ErrorStore{
    @observable errors = new Map<string,string>()
    @action setErrors(IError: IError){
        for (let key in IError.errors){
            this.errors.set(key,IError.errors.get(key)||'')
        }

    }
    get getErrors(){
        return this.errors
    }
}
