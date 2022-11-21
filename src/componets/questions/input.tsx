import React from 'react'
import {IQuestion} from '../../@types/types'
import {Button} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
interface booleanProps{
  question: IQuestion
}

const InputQuestion:React.FC<booleanProps>=({question})=>{
  return(
    <div className="w-3/4 p-2 dark:bg-secondary-dark-bg bg-main-bg border-2 rounded-sm  h-fit mt-2">
        <div className="w-full pl-2">
          <div className="flex justify-between items-center">
            <p className="p-0 text-sm text-slate-400">{question.type}</p>
            <Button variant="contained" color="error" className="absolute r-0 b-0 w-fit h-full p-0"><DeleteForeverIcon/></Button>
          </div>
          <h3 className="text-black text-lg pb-2">{question.description}</h3>
          <p className="text-slate-600 text-sm">{question.point} is available </p>
          <hr style={{color:"black"}}/>
          <div className="pt-2">
            <label>Answer:</label>
            <input type="text" className="bg-main-bg border-1 p-2 w-full text-slate-500" id="answer-input" disabled value={question.answers.get("answer")?.value}/>
          </div>
          <hr/>
          <button className='m-2 px-4 py-2 bg-indigo-600 text-white rounded-lg  shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-200'>Edit question</button>
        </div>
    </div>
  )
}

export default InputQuestion
