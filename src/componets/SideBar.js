import React from 'react'
import {observer} from 'mobx-react-lite'
import HtmlStates from '../store/htmlStates'
import UserSessionManager from "../store/userStore";
import {toJS} from 'mobx'
import {sideBarStudent} from '../data/sideBar'
import {Link} from 'react-router-dom'

const SideBar= observer(()=>{
    const activeMenu = HtmlStates.activeMenu
    const user = toJS(UserSessionManager.user)
    return(
        activeMenu && <div className={"flex-col mobile:w-72  w-full  absolute mobile:relative dark:bg-secondary-dark-bg bg-light-gray h-100 "}>
           {/*<button className={'w-fit fixed left-20 bg-transparent'} onClick={()=>{HtmlStates.toggleActiveMenu()}}><CloseIcon/></button>*/}
            <div className={"w-full dark:bg-secondary-dark-bg bg-main-db h-fit p-10"}>
               <img src={require('../assets/avatar.png')} alt={'user avatar'} className={'w-full'}/>
               <h3 className={'w-full text-center'}>{}</h3>
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
    )
})


export default SideBar