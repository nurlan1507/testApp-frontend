import React, {useState, useRef, useEffect} from 'react'
import {
    InputLabel,
    Radio, TextareaAutosize,
} from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const EditBoolean=({question})=>{
    const questionV1 = question // i create a new variable which is question because if a user edits question but not saving it so the question remains the same
    console.log(questionV1)
    console.log(question)
    const ref = useRef()
    const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState(null)
    useEffect(()=>{
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
                    onChange={(e)=>{questionV1.description=e.target.value}}
                />
            </div>
                {Object.keys(questionV1.answers).map((key)=>{
                    return(
                        <div className={'w-full bg-main-bg dark:bg-secondary-'}>
                            <div className={'w-full flex items-center mt-3 '}>
                                <p className={'text-gray text-medium p-0'}>{JSON.stringify(questionV1.answers[key].value)}</p>
                                <Radio checked={questionV1.answers[key].correct} onChange={(e)=>{setCurrentCorrectAnswer(key); question.changeCorrect(key,ref.current)}}/>
                            </div>
                        </div>

                    )
                })}
            <button className={'w-1/2 bg-submit-blue border-2 p-1 mt-5 rounded-lg text-white active:shadow-lg transition duration-400 ease-in hover: shadow-md transition duration-400 brightness-150 ease-in'} onClick={()=>{
                console.log(question)
                question.saveChanges(questionV1)
            }}>Save</button>
        </div>)

}

export default EditBoolean