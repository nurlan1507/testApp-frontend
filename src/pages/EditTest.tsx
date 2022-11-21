import React,{useContext} from 'react'
import EditTestSidebar from "../componets/EditTestSidebar";
import {observer} from 'mobx-react-lite'
import RootStore from '../store/rootStore'
const EditTest:React.FC=()=>{
    console.log("render")
    return(
            <div className={'flex w-full'}>
                <div className={'w-1/4'}>
                    <EditTestSidebar/>
                </div>
                <div className={'w-3/4 min-h-screen dark:bg-main-dark-bg bg-edit-test-bg justify-between' }>
                  <div className=' flex flex-col items-center h-fit w-full'>
                    {RootStore.testStore.questions.map((question)=>{
                      return(
                        <>
                          {question.draw()}
                        </>
                      )
                    })}
                  </div>

                </div>
            </div>
    )
}

export default observer(EditTest)
