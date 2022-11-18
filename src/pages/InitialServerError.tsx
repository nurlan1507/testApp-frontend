import React from 'react'
import {observer} from 'mobx-react-lite'
const ServerError:React.FC=()=>{
    return(
        <>
            <h1>
                Initial server error
            </h1>
        </>
    )
}

export default observer(ServerError)
