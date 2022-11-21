import {toJS, observable, action,makeObservable } from "mobx";

type Err ={
  email:string
  password:string
  username:string
}

export class ErrorStore{
    errors = new Map<string,string>()
    setErrors(Error: Err){
        for (const [key,value] of Object.entries(Error)){
            console.log(value)
            this.errors.set(key,value||'')
        }
    }
    get getErrors(){
        return this.errors
    }
    constructor(){
      makeObservable(this,{
        errors:observable,
        setErrors:action
      })
    }
}
