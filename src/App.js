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
import InitialServerError from "./pages/InitialServerError";
import NotFound from "./pages/NotFound";
import Navbar from "./componets/Navbar"
import EditTest from "./pages/EditTest";
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
                           <Navbar/>
                            <Routes>
                                <Route path={'/home'} element={<Home/>}/>
                                <Route path={'/signUp'} element={<SignUp/>}/>
                                <Route path={'/signIn'} element={<SignIn/>}/>
                                <Route path={'/createTest'} element={<CreateTest/>}/>
                                <Route path={'/notFound'} element={<NotFound/>}/>
                                <Route path={'/serverError'} element={<InitialServerError/>}/>
                                <Route path={'/editTest/'} element={<EditTest/>}/>
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </div>


  );
})

export default App;
