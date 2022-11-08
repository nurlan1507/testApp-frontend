import React,{useContext} from 'react'
import EditTestSidebar from "../componets/EditTestSidebar";
import {observer} from 'mobx-react-lite'
import testQuestions from "../store/testQuestions";
import EditQuestionSideBar from "../componets/EditQuestionSideBar"
import {Bars} from "../context";
const EditTest =observer(()=>{
    const context = useContext(Bars)

    console.log(context.activeEditQuestionSidebar+"ASDSASDasdas")
    return(
        <div className={'flex w-full'}>
            <div className={'w-1/4'}>
                <EditTestSidebar/>
            </div>
            <div className={'w-3/4 p-4 dark:bg-main-dark-bg bg-edit-test-bg ' }>
                {testQuestions.questions.map((question)=>{
                    return (question.draw())
                })}
            </div>
            <div className={`${context.activeEditQuestionSidebar?'block':'hidden'}`}>
                <EditQuestionSideBar/>
            </div>

        </div>

    )
})

export default EditTest