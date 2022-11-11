import React,{useRef,useEffect,useState} from 'react'
import {
    Input,
    Radio,
    TextField,
    TextareaAutosize, FormControl, InputLabel
} from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const EditInputRadio=({question})=>{
    const ref = useRef()
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const questionV1 = Object.assign({}, question)
    useEffect(()=>{
        ref.current = correctAnswer
    },[correctAnswer])
    return(
        <div className={'w-full bg-bg-main=-bg dark:bg-secondary-bg'}>
            <div className={'mt-3 w-full'}>
                <TextareaAutosize className={'w-full bg-main-bg border-2 text-medium'} minRows={3} onChange={(e)=>{question.description=e.target.value}}>{question.description}</TextareaAutosize>
            </div>
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
                        <div className={' p-0 col-start-1 col-end-5  '} >
                            <TextareaAutosize   minRows={2} className={'w-full text-light text-medium p-0 h-full border-2 bg-main-bg'} style={{"height":"100%"}} placeholder={question.answers[key].value} onInput={(e)=>{question.answers[key].value= e.target.value}}/>
                        </div>
                        <div className={'p-0 col-start-5 col-end-6  border-2 flex justify-center items-center'} >
                            <Radio checked={question.answers[key].correct} value={question.answers[key].value} onClick={()=>{ console.log("ADSIUHASDASDASDASDASDASDASDASDASDASDASDASDASDASDHHASDHSDH")
                                setCorrectAnswer(key) ;
                                console.log(correctAnswer); question.changeCorrect(key,ref.current)}} inputProps={{style:{width:"5px"}}} onChange={(e)=>{

                            }}/>
                        </div>
                    </>
                    )
                })}
            </div>
            <FormControl className={'border-2 w-full'}>
                <p className={'text-light text-gray text-medium pb-1'}>
                    Point:
                </p>
                <TextField className={'w-12'} inputProps={{style:{padding:1}}} id='point' onChange={(e)=>{question.point=e.target.value}} type={'number'} >{question.point}</TextField>
            </FormControl>
            {/*<button type={"button"} className={'w-1/2 bg-submit-blue border-2 p-1 mt-5 rounded-lg text-white active:shadow-lg transition duration-400 ease-in hover: shadow-md transition duration-400 brightness-150 ease-in'}>Edit</button>*/}
        </div>)

}

export default EditInputRadio