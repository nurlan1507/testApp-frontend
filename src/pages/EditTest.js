import React from 'react'
import EditTestSidebar from "../componets/EditTestSidebar";
import {RadioButton} from "../store/testQuestions";
import {questionBlankets} from '../data/quesiton'
const EditTest =()=>{
    const q = new RadioButton(questionBlankets[0])
    return(
        <div className={'flex w-full'}>
            <div className={'w-1/4'}>
                <EditTestSidebar/>
            </div>
            <div className={'w-3/4 dark:bg-main-dark-bg bg-edit-test-bg' }>
                {q.draw()}
            </div>
        </div>

    )
}

export default EditTest