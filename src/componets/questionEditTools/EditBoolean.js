import React, {useState, useRef, useEffect} from 'react'
import {
    FormControl, Input,
    InputLabel,
    Radio, TextareaAutosize, TextField,
} from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const EditBoolean=({question})=>{
    const questionV1 = Object.assign({}, question) // i create a new variable which is question because if a user edits question but not saving it so the question remains the sam
    const ref = useRef()
    const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState(null)
    useEffect(()=>{
        console.log(currentCorrectAnswer)
        ref.current = currentCorrectAnswer
    },[currentCorrectAnswer])
    return(
        <div className={'w-full bg-bg-main-bg dark:bg-secondary-bg'}>
            <div className={'mt-3 w-full'}>
                <InputLabel htmlFor={"questionTextArea"}>Question description </InputLabel>
                <TextareaAutosize
                    id={"questionTextArea"}
                    aria-label="empty textarea"
                    placeholder="Empty"
                    style={{ width: '100%', minHeight:"50px"}}
                    onChange={(e)=>{question.description=e.target.value}}
                />
            </div>
                {Object.keys(question.answers).map((key)=>{
                    return(
                        <div className={'w-full bg-main-bg dark:bg-secondary-'}>
                            <div className={'w-full flex items-center mt-3 '}>
                                <p className={'text-gray text-medium p-0'}>{JSON.stringify(question.answers[key].value)}</p>
                                <Radio checked={question.answers[key].correct} onChange={(e)=>{setCurrentCorrectAnswer(key); question.changeCorrect(key,ref.current)}}/>
                            </div>
                        </div>
                    )
                })}
            <hr></hr>
            <div className={'w-full mt-5'}>
                <FormControl >
                    <p className={'text-light text-gray text-medium pb-1'}>
                        Point:
                    </p>
                    <TextField className={'w-12'} inputProps={{style:{padding:1}}} id='point' onChange={(e)=>{}} type={'number'} >{question.point}</TextField>
                </FormControl>
            </div>

            <button className={'w-1/2 bg-submit-blue border-2 p-1 mt-5 rounded-lg text-white active:shadow-lg transition duration-400 ease-in hover: shadow-md transition duration-400 brightness-150 ease-in'} onClick={()=>{
                console.log(question)
            }}>Save</button>
        </div>)

}

export default EditBoolean