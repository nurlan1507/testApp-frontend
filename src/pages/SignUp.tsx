import React, {useEffect,useState} from 'react'
import {Input, InputLabel, InputAdornment, Alert, FormControl, Select, MenuItem} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person'
import {useNavigate} from "react-router-dom"
import {toJS} from "mobx";
import {observer} from 'mobx-react-lite'
import RootStore from '../store/rootStore'

interface Props{

}

const SignUp:React.FC<Props>=observer(()=>{
    const [email, setEmail ]= useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [groupId ,setGroupId] = useState<number|null>(null)
    const [repeatedPassword, setRepeatedPassword] = useState<string>('')
    const [errMap, setErrMap] = useState(toJS(RootStore.errorStore.errors))
    useEffect(()=>{
        console.log(RootStore.errorStore.errors)
        setErrMap(RootStore.errorStore.errors)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[RootStore.errorStore.errors])
    return(
        <div className={'w-full  bg-main-bg dark:db-main-dark-bg h-full' } style={{paddingTop:"100px"}} >
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
                        {RootStore.errorStore.errors.get("email") && <Alert severity="error" className={'p-0'}>{RootStore.errorStore.errors.get("email")}</Alert>}
                    </div>
                    {}
                    <div className={"mt-8  w-full"}>
                        <InputLabel htmlFor='username'>Username:</InputLabel>
                        <Input id='username' onChange={(e)=>{setUsername(e.target.value)}} className={'w-full '} startAdornment={
                            <InputAdornment position="start">
                                <PersonIcon/>
                            </InputAdornment>
                        }   />
                        {RootStore.errorStore.errors.get("username") && <Alert severity="error" className={'p-0'}>{RootStore.errorStore.errors.get("username")}</Alert>}
                    </div>
                    <div className={"mt-8 w-full"}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Group</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                value={groupId||1}
                                onChange={(e)=>{
                                  if (typeof e.target.value ==="number"){
                                    setGroupId(e.target.value)
                                  }
                                  console.log(typeof e.target.value)
                                }}
                            >
                                <MenuItem value={1}>SE-2101</MenuItem>
                                <MenuItem value={2}>SE-2102</MenuItem>
                                <MenuItem value={3}>SE-2103</MenuItem>
                            </Select>
                        </FormControl>
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
                        {RootStore.errorStore.errors.get("password") && <Alert  severity="error" className={'p-0 h-fit m-0'}>{RootStore.errorStore.errors.get("password")}</Alert>}
                        {RootStore.errorStore.errors.get("repeatPassword") && <Alert severity="error" className={'p-0'}>{RootStore.errorStore.errors.get("repeatPassword")}</Alert>}
                    </div>
                    <button className={'w-full h-12 bg-submit-blue text-sm text-white mt-10 '} onClick={()=>RootStore.userStore.signUp(email,username,password,repeatedPassword, groupId)} type={"button"}>Sign Up</button>

            </div>
                </div>
        </div>
    )
})

export default SignUp
