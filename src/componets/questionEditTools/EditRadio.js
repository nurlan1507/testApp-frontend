import React,{useRef,useEffect,useState} from 'react'
import {
    Input,
    Radio,
    TextField,
    TextareaAutosize
} from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const EditInputRadio=({question})=>{
    const ref = useRef()
    const [correctAnswer, setCorrectAnswer] = useState(null)
    useEffect(()=>{
        ref.current = correctAnswer
    },[correctAnswer])
    return(
        <div className={'w-full bg-bg-main=-bg dark:bg-secondary-bg'}>
            <div className={'w-full grid grid-col-6 row-1 align-items-center'}>
                <div className={'col-start-1 col-end-5 pb-2'}>
                    <p className={'text-gray text-light text-sm p-0  '}>Text</p>
                </div>
                <div className={'col-start-5 col-end-6  pb-2'}>
                    <p className={'text-gray text-light text-sm p-0 justify-items-end top-0 right-0 '}>Option</p>
                </div>

                {Object.keys(question.answers).map((key)=>{
                    return(
                    <>
                        <div className={' p-0 col-start-1 col-end-5  '}>
                            <TextareaAutosize    minRows={2} className={'w-full text-light text-medium p-0 h-full border-2 bg-main-bg'} style={{"height":"100%"}} placeholder={question.answers[key].value} onChange={()=>{}}/>
                        </div>
                        <div className={'p-0 col-start-5 col-end-6  border-2 flex justify-center items-center'}>
                            <Radio checked={question.answers[key].correct} value={question.answers[key].value}  inputProps={{style:{width:"5px"}}} onChange={(e)=>{
                                setCorrectAnswer(key); question.changeCorrect(key,correctAnswer)
                            }}/>
                        </div>
                    </>


                    )
                })}
            </div>
            <button className={'w-1/2 bg-submit-blue border-2 p-1 mt-5 rounded-lg text-white active:shadow-lg transition duration-400 ease-in hover: shadow-md transition duration-400 brightness-150 ease-in'}>Edit</button>
        </div>)

}

export default EditInputRadio