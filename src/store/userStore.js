import {makeObservable, observable, action, toJS} from 'mobx'

import jwtDecode from "jwt-decode";
import {RefreshAccessToken} from "../api/userApi";
import {signInApi,singUpApi} from "../api/userApi";


class user{
    userId
    username
    email
    role
    exp
    constructor(id,username,email,role,exp) {
        this.userId = id
        this.username =username
        this.email = email
        this.role = role
        this.exp = exp
    }


}

export class UserSessionManager {
    user = new user()
    constructor() {
        this.user = null
        makeObservable(
            this, {
                user: observable,
                signIn: action,
                signUp:action,
            }
        )
        const token = window.localStorage.getItem("accessToken")
        console.log(token)
        try{
            var newuser = jwtDecode(token)
            this.user = new user(newuser.Id, newuser.Username, newuser.Email,newuser.Role , newuser.exp)
            console.log(toJS(this.user))
            window.addEventListener("storage", (ev) => {
                if (ev.key === "accessToken") {
                    console.log(ev.newValue)
                    this.processToken(ev.newValue)
                }
            })
            console.log(this.user)
            setInterval(() => this.checkTokenExpiry(token), 300000)
        }catch (e){
            window.localStorage.removeItem("accessToken")
            const newToken = this.getNewToken()
            console.log("NEWTOKEN")
            window.localStorage.setItem("accessToken", JSON.stringify(newToken.Value))
        }

    }

    async getNewToken(){
        return await RefreshAccessToken()
    }

    async signUp(email, username,password, repeatPassword) {
        try{
            let res = await singUpApi(email, username,password, repeatPassword)
            this.user = new user(res.id, res.username, res.email, res.role)
            console.log(this.user)
            window.localStorage.setItem("accessToken", res.AccessToken)
            window.location.href="/home"
        }catch (e){
            console.log(e)
            return e
        }
    }
    async signIn(email,password){
        try{
            let res = await signInApi(email,password)
            this.user = new user(res.id, res.username, res.email, res.role)
            window.localStorage.setItem("accessToken", res.AccessToken)
            window.location.href="/home"
        }catch (e){
            console.log(e)
        }
    }

    processToken(token) {
        if(!token){
            return
        }
        try{
            var newuser = jwtDecode(token)
            this.user = new user(newuser.Id, newuser.Username, newuser.Email,newuser.Role , newuser.exp)
            console.log(this.user)
        }catch (e) {
            alert(e.message);
            throw (e)
        }
    }


    updateToken(token){
        window.localStorage.setItem("accessToken",JSON.stringify(token))
    }

   async checkTokenExpiry(token) {
        if (!token) {
            return
        }
        if (this.user != null) {
            let expired = this.user.exp < (Date.now() - 1000 * 60 * 5) / 1000;
            if (expired) {
                console.log("OOOPS I EXPRED")
                const newToken = await RefreshAccessToken()
                console.log("NEWTOKEN")
                window.localStorage.setItem("accessToken", JSON.stringify(newToken.Value))
            }
        }
        return ;
    }
}


export default new UserSessionManager()