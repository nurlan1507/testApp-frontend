import React, {useEffect, useState} from 'react'
import {Input, InputLabel, InputAdornment, Alert, Select, MenuItem, TextField, FormControl} from '@mui/material'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {observer} from 'mobx-react-lite'
import {toJS} from 'mobx'

import TitleIcon from '@mui/icons-material/Title';
import {CreateTest as apiC} from '../api/testApi'
import RootStore from '../store/rootStore'

const CreateTest:React.FC=()=>{
    const [title,setTitle] = useState("")
    const [description, setDescription]= useState("")
    const [groupId,setGroupId]= useState("")
    const [startDate, setStartDate] = useState<string>("")
    const [errMap,setErrMap] = useState<Map<string,string>>(toJS(RootStore.errorStore.errors))
    useEffect(()=>{
        setErrMap(toJS(RootStore.errorStore.errors))
    },[toJS(RootStore.errorStore.errors)])

    return(
       <div className={`w-full flex flex-col items-center p-4` }>
               <h1 className={'text-center '}>Create a test</h1>
               <div className={'w-full md:w-full max-w-lg flex items-center flex-col'}>
                   <div className={"mt-8 w-full"}>
                       <InputLabel htmlFor='title'>Title:</InputLabel>
                       <Input id='title' onChange={(e)=>{setTitle(e.target.value)}} className={'w-full'} startAdornment={
                           <InputAdornment position="start">
                               <TitleIcon/>
                           </InputAdornment>
                       }
                       />
                       {errMap.get("title") && <Alert severity="error" className={'p-0'}>{errMap.get("title")}</Alert>}
                   </div>
                   <div className={"mt-8 w-full"}>
                       <InputLabel htmlFor='title'>Description:</InputLabel>
                        <TextareaAutosize id="description"  aria-label="maximum height"  placeholder="Maximum 4 rows" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua."
                                          className={'w-full'}
                                          onChange={(e)=>{setDescription(e.target.value)}}
                            />
                       {errMap.get("description") && <Alert severity="error" className={'p-0'}>{errMap.get("description")}</Alert>}
                   </div>
                   <div className={' w-full flex justify-between flex-wrap'}>
                       <div className={"mt-8 w-full"}>
                           <FormControl fullWidth>
                               <InputLabel id="demo-simple-select-label">Group</InputLabel>
                               <Select
                                   labelId="demo-simple-select-label"
                                   id="demo-simple-select"
                                   value={groupId}
                                   label="Age"
                                   onChange={(e)=>{setGroupId(e.target.value);
                                       console.log(groupId)}}
                               >
                                   <MenuItem value={1}>SE-2101</MenuItem>
                                   <MenuItem value={2}>SE-2102</MenuItem>
                                   <MenuItem value={3}>SE-2103</MenuItem>
                               </Select>
                           </FormControl>
                       </div>
                       <div className={'mt-8'}>
                           <InputLabel className={'mb-4'} id="start_date">Date when test starts</InputLabel>
                           <TextField
                               id="start_date"
                               label="Start test when.."
                               type="datetime-local"
                               defaultValue="2017-05-24T10:30"
                               onChange={(e)=>{setStartDate(e.target.value)}}
                               InputLabelProps={{
                                   shrink: true,
                               }}
                           />
                       </div>
                   </div>
                   <button className={'w-full h-12 bg-submit-blue text-sm text-white mt-10 '} type={"button"} onClick={()=>{RootStore.testStore.setTest(0,title,description,groupId,"testName",2,[]);console.log(RootStore.testStore); }}>Create Test</button>
               </div>
           </div>

    )
}
//apiC(title,description,groupId,startDate,RootStore.userStore.userId)
export default observer(CreateTest)
