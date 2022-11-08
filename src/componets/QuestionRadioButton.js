import React, {useState, useRef, useEffect, useContext} from 'react'
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Bars} from "../context";
const QuestionRadioButton=({question})=>{
    const [correctKey, setCorrectKey] = useState(null)
    const prevCorrectKeyRef = useRef()
    useEffect(()=>{
        prevCorrectKeyRef.current = correctKey
    },[correctKey])
    const setBar = useContext(Bars).setActiveEditQuestionSidebar
    const setQuestion = useContext(Bars).setQuestion
    return(
        <div className={'w-full p-8 border-2 border-slate-400 bg-main-bg '}>
            <div className={'flex justify-between'}>
                <h3 className={'text-gray text-lg font-light'}>RadioButton</h3>
                <div className={'grid gap-4 grid-cols-2 '}>
                    <button className={'p-1 bg-submit-blue rounded-lg '}
                    onClick={()=>{
                        setQuestion(question)
                        setBar(true)}}>
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

export default QuestionRadioButton
