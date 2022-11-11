import React from 'react'
import {observer} from 'mobx-react-lite'
import UserSessionManager from "../store/userStore";
import {useParams} from 'react-router-dom'
import HtmlStates from "../store/htmlStates";
import MenuIcon from '@mui/icons-material/Menu';
import {toJS} from "mobx";
const Home=observer(()=>{
    var user = toJS(UserSessionManager.user)
    console.log(useParams())
    return (
        <>
            {user.username}
        </>
        )
})

export default Home