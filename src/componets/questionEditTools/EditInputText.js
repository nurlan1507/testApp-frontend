import React from 'react'
import {Button, Input, InputAdornment} from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const EditInputText=({question})=>{
    return(
        <div className={'w-full bg-bg-main=-bg dark:bg-secondary-bg'}>
        <Input className={'w-full'} id={'editAnswer'} startAdornment={
            <InputAdornment>
                <QuestionAnswerIcon/>
            </InputAdornment>
        }
               value={question.correctAnswer}
        />
        <Button variant="contained" color="primary" onClick={()=>{
        }
        }>
            Save
        </Button>
    </div>)

}

export default EditInputText