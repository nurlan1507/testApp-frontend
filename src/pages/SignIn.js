import React, {useState} from 'react'
import {Input, InputLabel, InputAdornment, Alert} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Cookies from 'universal-cookie';
import PersonIcon from '@mui/icons-material/Person';
import {parseToJson} from "../Helpers/helpers";
import {useNavigate} from "react-router-dom";





export default function SignIn(){
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMap, setErr] = useState(new Map())
    const updateErrMap =(key,value)=>{
        setErr(err=>new Map(err.set(key,value)))
    }
    const cookies = new Cookies()
    const signIn =async()=>{
        const body = {
            email,
            password
        }
        const res = await fetch("http://localhost:4000/signIn", {
            method:"POST",
            mode:"cors",
            body: JSON.stringify(body)
        })
        if (res.status===400){
            let errors = await parseToJson(res)
            for ( var key in errors){
                updateErrMap(key,errors[key])
            }
            console.log(errMap)
        }else if(res.status===500){
            console.log(500)
        }else if (res.status===200){
            var data = await parseToJson(res)
            cookies.set('AccessToken', data.AccessToken, "/")
            navigate("/")
        }
    }

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
                    <button className={'w-full h-12 bg-submit-blue text-sm text-white mt-10 '} onClick={()=>signIn(email,password)} type={"button"}>Sign Up</button>
            </div>

            </div>
        </div>
    )
}