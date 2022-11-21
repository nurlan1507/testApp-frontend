import React from 'react'
import {IQuestion} from '../../@types/types'
import {Button} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
interface booleanProps{
  question: IQuestion
}

const BooleanQuestion:React.FC<booleanProps>=({question})=>{
  return(
    <div className="w-3/4 p-2 dark:bg-secondary-dark-bg bg-main-bg border-2 rounded-sm mt-2  h-fit">
        <div className="w-full pl-2">
          <div className="flex justify-between items-center">
            <p className="p-0 text-sm text-slate-400">{question.type}</p>
            <Button variant="contained" color="error" className="absolute r-0 b-0 w-fit h-full p-0"><DeleteForeverIcon/></Button>
          </div>
          <h3 className="text-black text-lg pb-2">{question.description}</h3>
          <p className="text-slate-600 text-sm">{question.point} is available </p>
          <hr style={{color:"black"}}/>
          <ul className="w-full list-none p-0">
            {Array.from(question.answers.keys()).map((key:string)=>{
              return(
                <li className={`w-full cursor-pointer hover:border:2 hover:border-current pt-2 pb-2 text-medium text-black ${(question.answers.get(key)?.correct)?'border-2 border-sky-700':''}`}>
                  <input type="checkbox" checked={question.answers.get(key)?.correct} className="w-6 h-full cursor-pointer" name="answer" id={key}  />
                  <label className="cursor-pointer w-full" htmlFor={key} id="labelq">{`${key}: ${question.answers.get(key)?.value}`}</label>
                </li>
              )
            })}
            <hr/>
            <button className='m-2 px-4 py-2 bg-indigo-600 text-white rounded-lg  shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-200'>Edit question</button>
          </ul>
        </div>
    </div>
  )
}

export default BooleanQuestion
