import React,{useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Bars} from '../context'
import {FormControl, OutlinedInput, InputAdornment, InputLabel, TextareaAutosize, Button} from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {Label} from "@mui/icons-material";
const EditQuestionSideBar=observer(()=>{
    const setBar = useContext(Bars).setActiveEditQuestionSidebar
    const bar = useContext(Bars).activeEditQuestionSidebar
    const question = useContext(Bars).question
    return(
        bar  && question && <div className={`min-h-screen mobile:w-1/3 w-1/2 absolute mobile:right-0 right-0 top-0 dark:bg-secondary-dark-bg bg-main-bg pl-5 pr-5 pt-2
             transition-all
             `}>
            <div className={'flex justify-between items-center mt-3'}>
                <h2 className={'text-lg text-black'}>{question.type}</h2>
                <Button variant="text" color="error" onClick={()=>{
                    setBar(false)
                }}>X</Button>
            </div>
            <hr style={{color:"#000"}} className={'mt-2'}/>
            <div className={'mt-5 w-full'}>
                {question.drawEditingMenu()}
            </div>
        </div>
        )
})


export default EditQuestionSideBar