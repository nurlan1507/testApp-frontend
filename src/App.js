import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'

function App() {
    const currentMode = 'light'
    const activeMenu = false
    return (
        <div className={currentMode === 'Dark' ? 'dark':''}>
            <BrowserRouter>
                <div className={'flex w-full'}>
                    {activeMenu ? (
                        <div className={'w-72  dark:bg-secondary-dark-bg bg-main-bg h-100 '}>
                            SideBar
                        </div>
                    ):(
                        <div className={'w-0'}>
                            SideBar
                        </div>
                    )
                    }
                    <div className={`w-full dark:bg-main-dark bg-main-bg min-h-screen `}>
                        <div>
                            <Routes>
                                <Route path={'/home'} element={'home'}/>
                                <Route path={'/signUp'} element={<SignUp/>}/>
                                <Route path={'/signIn'} element={'signIn'}/>
                            </Routes>
                        </div>
                    </div>
                </div>

            </BrowserRouter>
        </div>

  );
}

export default App;
