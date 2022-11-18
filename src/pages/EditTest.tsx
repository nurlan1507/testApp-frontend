import React,{useContext} from 'react'
// import EditTestSidebar from "../componets/EditTestSidebar";
import {observer} from 'mobx-react-lite'
const EditTest =observer(()=>{

    return(
            <div className={'flex w-full'}>
                <div className={'w-1/4'}>

                </div>
                <div className={'w-3/4 min-h-screen dark:bg-main-dark-bg bg-edit-test-bg flex flex-col justify-between' }>

                </div>

            </div>
    )
})

export default EditTest
      // <EditTestSidebar/>
