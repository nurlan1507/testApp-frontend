import React from 'react'
import {observer} from 'mobx-react-lite'
import UserSessionManager from "../store/userStore";
import {toJS} from "mobx";
const Home=observer(()=>{
   var user = toJS(UserSessionManager.user)
    console.log(user)
    return (
        <>
            {user.Username}
        </>
        )
})

export default Home