import React,{useState,useEffect,useRef} from 'react'
import {
    Button, Checkbox, FormControl, FormControlLabel, Input, InputLabel, Radio,
    TextareaAutosize, TextField
} from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const EditMCQ=({question})=>{
    const ref = useRef()
    const [prev,setPrev] = useState(null)
    useEffect(()=>{
        ref.current = prev
    },[prev])
    return(
        <div className={'w-full bg-bg-main-bg dark:bg-secondary-bg'}>
            <div className={'mt-3'}>
                <TextareaAutosize minRows={2} className={'w-full border-2'}>
                    {question.description}
                </TextareaAutosize>
            </div>
            <div className={'w-full grid grid-col-6 row-1 align-items-center mt-8'}>
                <div className={'col-start-1 col-end-5 pb-2'}>
                    <p className={'text-gray text-light text-sm p-0  '}>Text</p>
                </div>
                <div className={'col-start-5 col-end-6  pb-2'}>
                    <p className={'text-gray text-light text-sm p-0 justify-items-end top-0 right-0 '}>Option</p>
                </div>

                {Object.keys(question.answers).map((key)=>{
                    console.log(question.answers[key])
                    return(
                        <>
                            <div className={' p-0 col-start-1 col-end-5  '}>
                                <TextareaAutosize onInput={(e)=>{question.answers[key].value=e.target.value}} minRows={2} className={'w-full text-light text-medium p-0 h-full border-2 bg-main-bg'} style={{"height":"100%"}} placeholder={question.answers[key].value} onChange={()=>{}}/>
                            </div>
                            <div className={'p-0 col-start-5 col-end-6  border-2 flex justify-center items-center'}>
                                <Checkbox checked={question.answers[key].correct} onChange={(e)=>{setPrev(key); question.changeCorrect(key,ref.current)}}/>
                            </div>
                        </>
                    )
                })}
            </div>
            <FormControl className={'border-2 w-full mt-3'}>
                <p className={'text-light text-gray text-medium pb-1'}>
                    Point:
                </p>
                <TextField className={'w-12'} inputProps={{style:{padding:1} }} id='point' onChange={(e)=>{question.point=e.target.value}} type={'number'} >{question.point}</TextField>
            </FormControl>

            <button className={'w-1/2 bg-submit-blue border-2 p-1 mt-5 rounded-lg text-white active:shadow-lg transition duration-400 ease-in hover: shadow-md transition duration-400 brightness-150 ease-in'}
            onClick={()=>{
                //save to db
            }}
            >Save
            </button>
        </div>
    )
}

export default EditMCQ