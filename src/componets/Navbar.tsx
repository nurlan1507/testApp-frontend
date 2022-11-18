import React,{useState} from 'react'
import RootStore from '../store/rootStore'
import MenuIcon from "@mui/icons-material/Menu";
import {observer} from 'mobx-react-lite'
import {useLocation} from 'react-router-dom'


interface Props{

}
const Navbar:React.FC<Props> =()=>{
  const path = useLocation()
  let checkr:string = path.pathname
  let show = checkr.split('/').includes('editTest')
  let hide:boolean = false
  if (path.pathname === '/signUp' || path.pathname==='/signIn' ||show){
      hide = true
  }
  return(<>{!hide && <button type={"button"} onClick={()=>RootStore.htmlStates.toggleActiveMenu()} className={"p-2 bg-submit-blue"}><MenuIcon/></button>}</>)
}
export default observer(Navbar)
