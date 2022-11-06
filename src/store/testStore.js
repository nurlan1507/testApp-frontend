import React from 'react'
import {makeObservable, action, observable} from "mobx";
import {CreateTest} from "../api/testApi";

class TestStore{
    test = null
    constructor() {
        makeObservable(this,{
            test: observable,
            reset:action,
            setTest:action,
            }
        )
    }
    reset(){
        this.test = null
    }
    async setTest(title,description,group, startDate){
        const res = await CreateTest(title,description,group,startDate)
        console.log(res)
        return res
    }
}

export default new TestStore()