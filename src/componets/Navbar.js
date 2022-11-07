import React,{useState} from 'react'
import HtmlStates from "../store/htmlStates";
import MenuIcon from "@mui/icons-material/Menu";
import {observer} from 'mobx-react-lite'
import {useLocation} from 'react-router-dom'
const Navbar=observer(()=>{
    const path = useLocation()
    let hide = false
    if (path.pathname === '/signUp' || path.pathname==='/signIn' || path.pathname==='/editTest/'){
        hide = true
    }
    return(
        !hide && <button type={"button"} onClick={()=>HtmlStates.toggleActiveMenu()} className={"p-2 bg-submit-blue"}><MenuIcon/></button>
    )
})

export default Navbar
