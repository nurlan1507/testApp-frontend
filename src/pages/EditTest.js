import React,{useContext} from 'react'
import EditTestSidebar from "../componets/EditTestSidebar";
import {observer} from 'mobx-react-lite'
import testQuestions from "../store/testQuestions";
import EditQuestionSideBar from "../componets/EditQuestionSideBar"
import {Bars} from "../context";
import {toJS} from "mobx";
const EditTest =observer(()=>{
    const context = useContext(Bars)

    console.log(context.activeEditQuestionSidebar+"ASDSASDasdas")
    return(
            <div className={'flex w-full'}>
                <div className={'w-1/4'}>
                    <EditTestSidebar/>
                </div>
                <div className={'w-3/4 min-h-screen dark:bg-main-dark-bg bg-edit-test-bg flex flex-col justify-between' }>
                    <div className={'p-4'}>
                        {testQuestions.questions.map((question)=>{
                            return (question.draw())
                        })}
                    </div>
                    <div className={'w-full pt-3'}>
                        <button className={'w-full bg-submit-blue p-2 text-white' } onClick={()=>{
                            console.log(toJS(testQuestions.questions))}}>Save Test!</button>
                    </div>
                </div>
                <div className={`${context.activeEditQuestionSidebar?'fixed ':'hidden'} mobile:w-full w-full fixed mobile:right-0 right-0 top-0 `}>
                    <EditQuestionSideBar/>
                </div>
            </div>
    )
})

export default EditTest