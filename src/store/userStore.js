import {makeObservable, makeAutoObservable,observable,action} from 'mobx'
import Cookie from 'universal-cookie'
import jwtDecode from "jwt-decode";




export class UserSessionManager {
    user = null

    constructor() {
        this.user = 'lox'
        makeObservable(
            this, {
                user: observable,
                signIn: action,
            }
        )
        // const token = JSON.parse(window.localStorage.getItem("accessToken"))
        // this.user = jwtDecode(token)
        // window.addEventListener("storage", (ev) => {
        //     if (ev.key === "accessToken") {
        //         this.processToken(ev.newValue)
        //     }
        // })
        // setInterval(() => this.checkTokenExpiry(), 300000)
    }

    signIn() {
        console.log(this.user)
        console.log('ACTION!MOBX')
    }


    processToken(token) {
        try {
            this.user = jwtDecode(token)

        } catch (e) {

        }


    }


    checkTokenExpiry(token) {
        if (!token) {
            return
        }
        if (this.user != null) {
            let expired = this.user.exp < (Date.now() - 1000 * 60 * 5) / 1000;
            if (expired) {
                // AuthApi.refresh(_this.getRefreshToken())
                //     .then(
                //         (newToken) => {  _this.updateToken(newToken) }
                //     )
                //     .catch(() => {
                //         _this.updateToken(null);
                //         window.location.href = "/login";
                //     });
            }
        }
        return Promise.resolve();
    }
}


export default new UserSessionManager()