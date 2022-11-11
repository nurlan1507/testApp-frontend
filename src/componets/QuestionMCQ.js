import React,{useContext} from 'react'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {FormControl, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup} from "@mui/material";
import {CheckBox} from "@mui/icons-material";

import {Bars} from "../context";

const QuestionMCQ =({question})=>{
    const setBar = useContext(Bars).setActiveEditQuestionSidebar
    const setQuestion = useContext(Bars).setQuestion
    return(
        <div className={'w-full p-8 border-2 border-slate-400 bg-main-bg mt-4'}>
            <div className={'flex justify-between'}>
                <h3 className={'text-gray text-lg font-light'}>{question.type}</h3>
                <div className={'grid gap-4 grid-cols-2 '}>
                    <button className={'p-1 bg-submit-blue rounded-lg '}
                    onClick={()=>{
                        setQuestion(question);
                        setBar(true)
                    }}
                    >
                        <EditIcon/>
                    </button>
                    <button className={'p-1 bg-delete rounded-lg'} onClick={()=>{

                    }}>
                        <DeleteIcon/>
                    </button>
                </div>
            </div>
            <div className={'pt-2'}>
                <FormLabel>
                    <p className={'text-gray text-medium font-light '}>{question.description}</p>
                </FormLabel>
                <hr style={{color:"#000"}} className={'mt-2'}/>
                    <div className={'grid gap-cols-gap-4 grid-cols-2 h-fit p-1'}>
                        <FormControl>
                            {Object.keys(question.answers).map((key)=>{
                                return(
                                    <FormControlLabel value={question.answers[key].value} control={<Radio checked={question.answers[key].correct} onChange={()=>{}} />} label={question.answers[key].value}/>
                                )
                            })}
                        </FormControl>

                    </div>
            </div>
            {/*<button className={'w-1/4 bg-submit-blue border-2 p-1 mt-5 rounded-lg text-white active:shadow-lg transition duration-400 ease-in hover: shadow-md transition duration-400 brightness-150 ease-in'} onClick={()=>{*/}
            {/*    console.log(question)*/}
            {/*}}>Save</button>*/}
        </div>
    )
}

export default QuestionMCQ