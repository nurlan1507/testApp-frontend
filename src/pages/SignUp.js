import React from 'react'
import axios from 'axios'
import {Input,InputLabel,InputAdornment,Alert} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person'
import {useState} from 'react'
export default function SignUp(){
    const [err,setErr] = useState(null)
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

        // var res = await fetch("http://localhost:4000/q",{method:"GET", type:'cors'})
        const res = await fetch("http://localhost:4000/signUp",{
            method:"POST",
            withCredentials:true,
            body:JSON.stringify(body)
        })
        console.log(res)
        const data = (await res.body.getReader().read()).value
        const str = String.fromCharCode.apply(String, data);
        console.log(str)
    }

    return(
        <div className={'w-full h-full  flex flex-col items-center bg-main-bg dark:db-main-dark-bg mt-50'}>
                <h1 className={'text-center'}>Sign Up</h1>
                <div className={'w-1/2 md:w-full max-w-lg flex items-center flex-col'}>
                    <div className={"mt-8 w-full"}>
                        <InputLabel htmlFor='email'>Email:</InputLabel>
                        <Input id='email' onChange={(e)=>{setEmail(e.target.value)}} className={'w-full'} startAdornment={
                            <InputAdornment position="start">
                                <AlternateEmailIcon/>
                            </InputAdornment>
                        } error
                               helperText={'error'}

                        />
                        {err && <Alert severity="error" className={'p-0'}>This is an error alert — check it out!</Alert>}
                    </div>
                    {}
                    <div className={"mt-8  w-full"}>
                        <InputLabel htmlFor='username'>Username:</InputLabel>
                        <Input id='username' onChange={(e)=>{setUsername(e.target.value)}} className={'w-full '} startAdornment={
                            <InputAdornment>
                                <PersonIcon/>
                            </InputAdornment>
                        }   />
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
                    </div>
                    <button className={'w-full h-12 bg-submit-blue text-sm text-white mt-10 '} onClick={()=>singUp(email,username,password,repeatedPassword)} type={"button"}>Sign Up</button>
                </div>
        </div>
    )
}