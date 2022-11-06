import React,{useState} from 'react'
import {Input, InputLabel, InputAdornment, Alert, Select, MenuItem, TextField} from '@mui/material'
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {observer} from 'mobx-react-lite'
import HtmlStates from "../store/htmlStates";



const CreateTest=observer(()=>{
    const [title,setTitle] = useState("")
    const [description, setDescription]= useState("")
    const [group,setGroup]= useState("")
    const [startDate, setStartDate] = useState(null)
    const [errMap,setErrMap] = useState(new Map())


    return(
       <div className={`w-full flex flex-col items-center` }>
               <h1 className={'text-center '}>Sign Up</h1>
               <div className={'w-full md:w-full max-w-lg flex items-center flex-col'}>
                   <div className={"mt-8 w-full"}>
                       <InputLabel htmlFor='title'>Title:</InputLabel>
                       <Input id='title' onChange={(e)=>{setTitle(e.target.value)}} className={'w-full'} startAdornment={
                           <InputAdornment position="start">
                               <AlternateEmailIcon/>
                           </InputAdornment>
                       }
                       />
                       {errMap.get("email") && <Alert severity="error" className={'p-0'}>{errMap.get("email")}</Alert>}
                   </div>
                   <div className={"mt-8 w-full"}>
                       <InputLabel htmlFor='title'>Description:</InputLabel>
                        <TextareaAutosize id="description"  aria-label="maximum height"
                                          placeholder="Maximum 4 rows"
                                          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua."
                                          className={'w-3/4'}
                                        onChange={(e)=>{setDescription(e.target.value)}}
                        />
                       />
                       {errMap.get("email") && <Alert severity="error" className={'p-0'}>{errMap.get("email")}</Alert>}
                   </div>
                   <div className={'mt-8 w-full flex justify-between flex-wrap'}>
                       <div className={'mt-8'}>
                           <InputLabel id="demo-simple-select-label">Select group</InputLabel>
                           <Select
                               labelId="demo-simple-select-label"
                               id="demo-simple-select"
                               value="select group"
                               label="Age"
                               className={"mt-4"}
                               onChange={(e)=>{setGroup(e.target.value)}}
                           >
                               <MenuItem value={"SE2102"}>SE2102</MenuItem>
                               <MenuItem value={"SE2101"}>SE2101</MenuItem>
                           </Select>
                       </div>
                       <div className={'mt-8'}>
                           <InputLabel id="start_date">Date when test starts</InputLabel>
                           <TextField
                               className={"mt-4"}
                               id="start_date"
                               label="Start test when.."
                               type="datetime-local"
                               defaultValue="2017-05-24T10:30"
                               InputLabelProps={{
                                   shrink: true,
                               }}
                           />
                       </div>

                   </div>
                   <button className={'w-full h-12 bg-submit-blue text-sm text-white mt-10 '} type={"button"}>Create Test</button>
               </div>
           </div>

    )
}
)
export default CreateTest