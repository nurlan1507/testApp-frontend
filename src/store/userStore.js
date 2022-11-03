import {makeObservable, makeAutoObservable} from 'mobx'
import Cookie from 'universal-cookie'
import jwtDecode from "jwt-decode";




export class User{
    user = null
    constructor(){
        makeObservable(this)
        this.user = jwtDecode(new Cookie().get("accessToken"))
    }

    getUserData(){
        const cookies = new Cookie()
        let token = cookies.get("accessToken")
        const decoded = jwtDecode(token)
        console.log(decoded)
        return
    }
}