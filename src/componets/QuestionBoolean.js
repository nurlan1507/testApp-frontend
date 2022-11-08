import React from 'react'
import {observer} from 'mobx-react-lite'
import {useEffect, useState, useRef} from "react"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const QuestionBoolean =({question})=>{
    const [correctKey, setCorrectKey] = useState('')
    const prevCorrectKeyRef = useRef()
    useEffect(()=>{
        prevCorrectKeyRef.current = correctKey
    },[correctKey])
    return(
        <div className={'w-full p-8 border-2 border-slate-400 bg-main-bg'}>
            <div className={'flex justify-between'}>
                <h3 className={'text-gray text-lg font-light'}>RadioButton</h3>
                <div className={'grid gap-4 grid-cols-2 '}>
                    <button className={'p-1 bg-submit-blue rounded-lg '}>
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
                <hr style={{color:"#000"}} className={'mt-2'}></hr>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <div  className={'grid gap-cols-gap-4 grid-cols-2 h-fit p-1'}>
                        {Object.keys(question.answers).map((key)=>{
                            return(
                                <FormControlLabel value={key} control={<Radio />} label={`${key}: ${question.answers[key].value}`}   onChange={(e)=>{setCorrectKey(e.target.value);
                                    console.log(prevCorrectKeyRef);question.changeCorrect(key,prevCorrectKeyRef.current); question.output()}}/>
                            )
                        })}
                    </div>
                </RadioGroup>
                <div className={'text-gray text-medium'}>Point:{question.point}</div>
            </div>
        </div>
    )
}

export default QuestionBoolean