import React from 'react'
import {Button, FormControl, Input, InputAdornment, InputLabel, TextareaAutosize, TextField} from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const EditInputText=({question})=>{
    const questionV1 = question
    return(
        <div className={'w-full bg-bg-main=-bg dark:bg-secondary-bg'}>
            <div className={'w-full mt-3'}>
                <TextareaAutosize className={'border-2 w-full'} placeholder={'add a question description here'} defaultValue={questionV1.description} minRows={2} onChange={(e)=>{questionV1.description =e.target.value}}/>
            </div>
            <div className={'w-full mt-3'}>
                <h3 className={'text-gray text-medium text-light'}>Edit an answer</h3>
                <hr></hr>
                <Input className={'w-full'}  onChange={()=>{}} id={'editAnswer'} startAdornment={
                    <InputAdornment >
                        <QuestionAnswerIcon/>
                    </InputAdornment> }
                />
            </div>
            <FormControl className={'border-2 w-full'}>
                <p className={'text-light text-gray text-medium pb-1'}>
                    Point:
                </p>
                <TextField className={'w-12'} inputProps={{style:{padding:1}}} id='point' onChange={(e)=>{}} type={'number'} >{question.point}</TextField>
            </FormControl>
            {/*<button className={'w-1/2 bg-submit-blue border-2 p-1 mt-2 rounded-lg text-white active:shadow-lg transition duration-400 ease-in hover: shadow-md transition duration-400 brightness-150 ease-in'} onClick={()=>{*/}
            {/*    console.log(question)*/}
            {/*    question.saveChanges(questionV1)*/}
            {/*}}>Save</button>*/}
    </div>)

}

export default EditInputText