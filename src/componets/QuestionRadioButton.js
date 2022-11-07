import React from 'react'
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const QuestionRadioButton=()=>{
    return(
        <div className={'w-full pb-5 border-2 border-slate-400'}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default QuestionRadioButton
