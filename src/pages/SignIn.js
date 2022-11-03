import React from 'react'
import {Input,InputLabel,InputAdornment} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
export default function SignUp(){


    return(
        <div className={'w-full h-full  flex flex-col items-center bg-main-bg dark:db-main-dark-bg mt-50'}>
            <h1 className={'text-center'}>Sign Up</h1>
            <div className={'w-1/2 md:w-full max-w-lg flex items-center flex-col'}>
                <div className={"mt-8 w-full"}>
                    <InputLabel htmlFor='email'>Email:</InputLabel>
                    <Input id='email' className={'w-full'} startAdornment={
                        <InputAdornment position="start">
                            <AlternateEmailIcon/>
                        </InputAdornment>
                    } />
                </div>
                <div className={"mt-8 w-full"} >
                    <InputLabel htmlFor={'password'}>Password:</InputLabel>
                    <Input id='password' className={'w-full '} startAdornment={
                        <InputAdornment position="start">
                            <LockIcon/>
                        </InputAdornment>
                    }  />
                </div>

                <button className={'w-full h-12 bg-submit-blue text-sm text-white mt-10 '} type={"button"}>Sign Up</button>
            </div>
        </div>
    )
}