import React from 'react'
import {Button, FormControl, Input, InputAdornment, InputLabel, TextareaAutosize, TextField} from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const EditInputText=({question})=>{
    const questionV1 = question
    return(
        <div className={'w-full bg-bg-main=-bg dark:bg-secondary-bg'}>
            <div className={'w-full mt-3'}>
                <TextareaAutosize className={'border-2 w-full'} placeholder={'add a question description here'} defaultValue={questionV1.description} minRows={2} onInput={(e)=>{questionV1.description =e.target.value}}/>
            </div>
            <div className={'w-full mt-3'}>
                <h3 className={'text-gray text-medium text-light'}>Edit an answer</h3>
                <hr></hr>
                <Input className={'w-full'}  onChange={(e)=>{this.correctAnswer = e.target.value;
                    console.log("LL")}} id={'editAnswer'} startAdornment={
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

    </div>)

}

export default EditInputText