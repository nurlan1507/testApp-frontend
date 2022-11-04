import {makeObservable, observable, action, toJS} from 'mobx'

import jwtDecode from "jwt-decode";
import {RefreshAccessToken} from "../api/userApi";
import {signInApi,singUpApi} from "../api/userApi";


export class UserSessionManager {
    user = null
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
        if (token){
            this.user = jwtDecode(token)
            console.log(toJS(this.user))
            window.addEventListener("storage", (ev) => {
                if (ev.key === "accessToken") {
                    console.log(ev.newValue)
                    this.processToken(ev.newValue)
                }
            })
            setInterval(() => this.checkTokenExpiry(token), 300000)
        }else{
            console.log("sds")
        }
    }

    async signUp(email, username,password, repeatPassword) {
        try{
            let res = await singUpApi(email, username,password, repeatPassword)
            console.log(res)
            this.user = res
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
            this.user = res
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
            this.user = jwtDecode(token)
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