import React from 'react'
import {observer} from 'mobx-react-lite'
const ServerError=observer(()=>{
    return(
        <>
            <h1>
                Initial server error
            </h1>
        </>
    )
})

export default ServerError