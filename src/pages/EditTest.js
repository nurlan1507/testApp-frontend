import React,{useContext} from 'react'
import EditTestSidebar from "../componets/EditTestSidebar";
import {RadioButton} from "../store/testQuestions";
import {questionBlankets} from '../data/quesiton'
import {observer} from 'mobx-react-lite'
import testQuestions from "../store/testQuestions";
const EditTest =observer(()=>{
    console.log(useContext().value)
    return(
        <div className={'flex w-full'}>
            <div className={'w-1/4'}>
                <EditTestSidebar/>
            </div>
            <div className={'w-3/4 p-4 dark:bg-main-dark-bg bg-edit-test-bg' }>
                {testQuestions.questions.map((question)=>{
                    return (question.draw())
                })}
            </div>
        </div>

    )
})

export default EditTest