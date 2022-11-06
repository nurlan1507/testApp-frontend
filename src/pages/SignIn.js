import React, {useState,useEffect} from 'react'
import {Input, InputLabel, InputAdornment, Alert} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {observer} from "mobx-react-lite";
import UserSessionManager from "../store/userStore";
import ErrorStore from "../store/errorStore";
import {toJS} from "mobx";




const SignIn=observer(()=>{
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMap, setErrMap] = useState(toJS(ErrorStore.errors))
    useEffect(()=>{
        setErrMap(toJS(ErrorStore.errors))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[toJS(ErrorStore.errors)])
    return(
        <div className={'w-full bg-main-bg dark:db-main-dark-bg'}  style={{paddingTop:"100px"}}>
            <div className={'w-4/5 md:w-full flex flex-col items-center  m-auto '}>
                <h1 className={'text-center'}>Sign Up</h1>
                <div className={'w-full md:w-full max-w-lg flex items-center flex-col'}>
                    <div className={"mt-8 w-full"}>
                        <InputLabel htmlFor='email'>Email:</InputLabel>
                        <Input id='email' className={'w-full'} startAdornment={
                            <InputAdornment position="start">
                                <AlternateEmailIcon/>
                            </InputAdornment>
                        }
                               onChange={(e)=>setEmail(e.target.value)}
                        />
                        {errMap.get("email") && <Alert severity="error" className={'p-0'}>{errMap.get("email")}</Alert>}

                    </div>
                    <div className={"mt-8 w-full"} >
                        <InputLabel htmlFor={'password'}>Password:</InputLabel>
                        <Input id='password' className={'w-full '} startAdornment={
                            <InputAdornment position="start">
                                <LockIcon/>
                            </InputAdornment>
                        }
                               onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        {errMap.get("password") && <Alert severity="error" className={'p-0'}>{errMap.get("password")}</Alert>}
                    </div>
                    <button className={'w-full h-12 bg-submit-blue text-sm text-white mt-10 '} onClick={()=>UserSessionManager.signIn(email,password)} type={"button"}>Sign Up</button>
            </div>

            </div>
        </div>
    )
})

export default SignIn