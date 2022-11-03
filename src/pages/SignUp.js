import React from 'react'
import axios from 'axios'
import {Input,InputLabel,InputAdornment,Alert} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person'
import {useState} from 'react'
import {parseToJson} from "../Helpers/helpers";
export default function SignUp(){
    const [errMap,setErr] = useState(new Map())
    const updateErrMap =(key,value)=>{
        setErr(err=>new Map(err.set(key,value)))
    }
    const [email, setEmail ]= useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const singUp=async(email, username,password, repeatPassword)=>{
        console.log(email,username,password)
       var body ={
           username,
           email,
           password,
           repeatPassword,
       }
        const res = await fetch("http://localhost:4000/signUp",{
            method:"POST",
            withCredentials:true,
            body:JSON.stringify(body)
        })
        if (!res.ok){
            let errors =await parseToJson(res)
            for (let key in errors){
                console.log("log")
                updateErrMap(key, errors[key])
            }
            console.log(errMap)
        }
        const data = {...await parseToJson(res)}
    }

    return(
        <div className={'w-full  bg-main-bg dark:db-main-dark-bg   h-full' } style={{padding:"100px"}} >
            <div className={'w-4/5 md:w-full flex flex-col items-center  m-auto '}>
                <h1 className={'text-center '}>Sign Up</h1>
                <div className={'w-full md:w-full max-w-lg flex items-center flex-col'}>
                    <div className={"mt-8 w-full"}>
                        <InputLabel htmlFor='email'>Email:</InputLabel>
                        <Input id='email' onChange={(e)=>{setEmail(e.target.value)}} className={'w-full'} startAdornment={
                            <InputAdornment position="start">
                                <AlternateEmailIcon/>
                            </InputAdornment>
                        }
                        />
                        {errMap.get("email") && <Alert severity="error" className={'p-0'}>{errMap.get("email")}</Alert>}
                    </div>
                    {}
                    <div className={"mt-8  w-full"}>
                        <InputLabel htmlFor='username'>Username:</InputLabel>
                        <Input id='username' onChange={(e)=>{setUsername(e.target.value)}} className={'w-full '} startAdornment={
                            <InputAdornment>
                                <PersonIcon/>
                            </InputAdornment>
                        }   />
                        {errMap.get("username") && <Alert severity="error" className={'p-0'}>{errMap.get("username")}</Alert>}
                    </div>
                    <div className={"mt-8 w-full"} >
                        <InputLabel htmlFor={'password'}>Password:</InputLabel>
                        <Input id='password' onChange={(e)=>{setPassword(e.target.value)}} className={'w-full '} startAdornment={
                            <InputAdornment position="start">
                                <LockIcon/>
                            </InputAdornment>
                        }  />
                    </div>
                    <div className={"mt-8 w-full"}>
                        <InputLabel htmlFor={'confirm-password'}>Password:</InputLabel>
                        <Input id='confirm-password' className={'w-full '} onChange={(e)=>{setRepeatedPassword(e.target.value)}} startAdornment={
                            <InputAdornment position="start">
                                <LockIcon/>
                            </InputAdornment>
                        }  />
                        {errMap.get("password") && <Alert  severity="error" className={'p-0 h-fit m-0'}>{errMap.get("password")}</Alert>}
                        {errMap.get("repeatPassword") && <Alert severity="error" className={'p-0'}>{errMap.get("repeatPassword")}</Alert>}
                    </div>
                    <button className={'w-full h-12 bg-submit-blue text-sm text-white mt-10 '} onClick={()=>singUp(email,username,password,repeatedPassword)} type={"button"}>Sign Up</button>
            </div>

                </div>
        </div>
    )
}