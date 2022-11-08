import React,{useContext} from 'react'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {FormControlLabel, FormLabel, RadioGroup} from "@mui/material";
import {CheckBox} from "@mui/icons-material";

import {Bars} from "../context";

const QuestionInputText =({question})=>{
    const setBar = useContext(Bars).setActiveEditQuestionSidebar
    const setQuestion = useContext(Bars).setQuestion
    return(
        <div className={'w-full p-8 border-2 border-slate-400 bg-main-bg mt-4'}>
            <div className={'flex justify-between'}>
                <h3 className={'text-gray text-lg font-light'}>{question.type}</h3>
                <div className={'grid gap-4 grid-cols-2 '}>
                    <button className={'p-1 bg-submit-blue rounded-lg '} onClick={()=>{
                        setQuestion(question); setBar(true)
                    }}>
                        <EditIcon/>
                    </button>
                    <button className={'p-1 bg-delete rounded-lg'}>
                        <DeleteIcon/>
                    </button>
                </div>
            </div>
            <div className={'pt-2'}>
                <FormLabel>
                    <p className={'text-gray text-medium font-light '}>{question.description}</p>
                </FormLabel>
                <hr style={{color:"#000"}} className={'mt-2'}/>
                <p className={'text-gray text-medium font-light'}>{question.correctValue}</p>
                <p className={'text-medium font-light'}>point :{question.point}</p>
            </div>
        </div>
    )
}

export default QuestionInputText