import {makeObservable, observable, action, toJS} from 'mobx'

import jwtDecode from "jwt-decode";
import {signInApi,singUpApi} from "../api/userApi";
import {parseToJson} from "../Helpers/helpers";

export interface IUser {
  userId :number;
  username :string;
  email:string;
  role:string;
  exp: number;
  groupId:number
}

interface IToken{
  Id :number;
  Username :string;
  Email:string;
  Role :string;
  exp :number;
}


export class UserStore implements IUser {
  @observable userId = 0;
  @observable username ='';
  @observable email='';
  @observable role='';
  @observable exp=0;
  @observable groupId = 0;
    constructor() {
      try{
        const token = window.localStorage.getItem("accessToken")
        if(token !== undefined){
              console.log(token)
              var newuser = jwtDecode<IToken>(token||'')
              //newuser.Id, newuser.Username, newuser.Email,newuser.Role , newuser.exp
              this.userId = newuser.Id
              this.username = newuser.Username
              this.email = newuser.Email
              this.role = newuser.Role
              this.exp = newuser.exp
        }
      }catch(e){
        console.log(e)
      }

    }


    @action async signUp(email:string, username:string,password:string, repeatPassword:string,groupId:number|null) {
        try{
            let res = await singUpApi(email, username,password, repeatPassword,groupId)
            console.log(res)
            // console.log(res)
            // this.userId = res.Id
            // this.username = res.Username
            // this.email = res.Email
            // this.role = res.Role
            // this.exp = res.exp
            // window.localStorage.setItem("accessToken", res.AccessToken)
            // window.location.href="/home"
        }catch (e){
            console.log(e)
            return e
        }
    }
    @action async signIn(email:string,password:string){
        try{
            let res = await signInApi(email,password)
            this.userId = res.Id
            this.username = res.Username
            this.email = res.Email
            this.role = res.Role
            this.exp = res.exp
            window.localStorage.setItem("accessToken", res.AccessToken)
            window.location.href="/home"
        }catch (e){
            console.log(e)
        }
    }
}
