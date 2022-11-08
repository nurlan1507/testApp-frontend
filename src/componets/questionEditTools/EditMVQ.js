import React from 'react'
import {
    Button, Checkbox,
    TextareaAutosize
} from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const EditMCQ=({question})=>{


    return(
        <div className={'w-full bg-bg-main-bg dark:bg-secondary-bg'}>
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
                                <Checkbox checked={question.answers[key].correct} value={question.answers[key].value}  inputProps={{style:{width:"5px"}}} onChange={(e)=>{
                                    question.changeCorrect(key,null)
                                }}/>
                            </div>
                        </>
                    )
                })}
            </div>
            <button className={'w-1/2 bg-submit-blue border-2 p-1 mt-5 rounded-lg text-white active:shadow-lg transition duration-400 ease-in hover: shadow-md transition duration-400 brightness-150 ease-in'}>Save</button>
        </div>)

}

export default EditMCQ