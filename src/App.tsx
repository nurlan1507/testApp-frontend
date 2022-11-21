import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
// import HtmlStates from './store/htmlStates'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import SideBar from './componets/SideBar'
import CreateTest from './pages/CreateTest'
// import MenuIcon from "@mui/icons-material/Menu";
// import InitialServerError from "./pages/InitialServerError";
// import NotFound from "./pages/NotFound";
import Navbar from "./componets/Navbar"
import EditTest from "./pages/EditTest";
// import TestPage from "./pages/TestPage";
const App=()=> {
    const currentMode = 'light'
    return (
            <div>
                <BrowserRouter>
                    <div className={'flex w-full'}>
                      <SideBar/>
                        <div className={`mobile:w-full mobile:block hidden   dark:bg-main-dark bg-main-bg min-h-screen `}>
                        <Navbar/>
                            <Routes>
                                <Route path={'/signUp'} element={<SignUp/>}/>
                                <Route path={'/signIn'} element={<SignIn/>}/>
                                <Route path={'/home'} element={<Home/>}/>
                                <Route path={'/createTest'} element={<CreateTest/>}/>
                                <Route path={'/editTest'} element={<EditTest/>} />
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
  );
}

export default App;
