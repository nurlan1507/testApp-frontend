import React,{useState} from 'react'
import {observer} from 'mobx-react-lite'
import RoomStore from '../store/rootStore'
import {toJS} from 'mobx'
import {sideBarStudent} from '../data/sideBar'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
const SideBar:React.FC=()=>{
    const user = toJS(RoomStore.userStore)
    let activeMenu = RoomStore.htmlStates.activeMenu
    const path = useLocation()
    let checkr = path.pathname
    let show = checkr.split('/').includes('editTest')
    if (path.pathname === '/signUp' || path.pathname==='/signIn' || show){
        activeMenu = !activeMenu
    }
    return(
      <>
      {
        activeMenu && <div className={"flex-col mobile:w-72  w-full  absolute mobile:relative dark:bg-secondary-dark-bg bg-light-gray h-100 "}>

            <div className={"w-full dark:bg-secondary-dark-bg bg-main-db h-fit p-10"}>
               <img src={require('../assets/avatar.png')} alt={'user avatar'} className={'w-full'}/>
               <h3 className={'w-full text-center'}>{user.username}</h3>
           </div>
            <ul className={"mt-2 pl-7"}>
                {sideBarStudent.map((item)=>{
                    return (
                        <div className={"text-black-500 mt-4 hover:bg-hover"} key={item.title}>
                                <Link to={item.link} className={"w-full"}>{item.title}</Link>
                        </div>
                    )
                })
                }
            </ul>
        </div>
      }
      </>

    )
}


export default observer(SideBar)
