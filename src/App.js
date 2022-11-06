import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import HtmlStates from './store/htmlStates'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import SideBar from './componets/SideBar'
import CreateTest from './pages/CreateTest'
import MenuIcon from "@mui/icons-material/Menu";


const App=observer(()=> {
    const currentMode = 'light'
    const activeMenu = HtmlStates.activeMenu
    console.log(activeMenu)
    return (
            <div className={currentMode === 'Dark' ? 'dark':''}>
                <BrowserRouter>
                    <div className={'flex w-full'}>
                        <SideBar/>
                        <div className={`mobile:w-full mobile:block hidden   dark:bg-main-dark bg-main-bg min-h-screen `}>
                            <button type={"button"} onClick={()=>HtmlStates.toggleActiveMenu()} className={"p-2 bg-submit-blue"}><MenuIcon/></button>
                            <Routes>
                                <Route path={'/home'} element={<Home/>}/>
                                <Route path={'/signUp'} element={<SignUp/>}/>
                                <Route path={'/signIn'} element={<SignIn/>}/>
                                <Route path={'/createTest'} element={<CreateTest/>}/>
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </div>


  );
})

export default App;
