import React, {useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
const Home=()=> {

    return (
        <div className={'w-full dark:bg-main-dark-bg bg-main-bg'}>
            HomePage
        </div>
    )
}

export default observer(Home)
