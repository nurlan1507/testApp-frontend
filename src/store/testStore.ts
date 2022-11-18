import {observable, action} from "mobx"
import {IQuestion,ITest} from '../@types/types'

export class TestStore implements ITest{
  @observable id = 0
  @observable title="";
  @observable description="";
  @observable groupId="";
  @observable authorName="";
  @observable startDate=Date.now();
  @observable questions=Array<IQuestion>();
  constructor(){

  }
  @action addAQuestion(newQuestion:IQuestion):void{
      this.questions?.push(newQuestion)
      return
  }
  @action deleteQuestion(question:IQuestion):void{
    const indexToDelete:number = this.questions?.indexOf(question)||-1
    if (indexToDelete!==-1){
      this.questions?.splice(indexToDelete,1)
    }
    return
  }
  @action setTest(id:number ,title:string, description:string, groupId:string, authorName:string, startDate:number, questions:[]){
    this.id = id ;
    this.title=title;
    this.description = description;
    this.groupId = groupId;
    this.authorName = authorName;
    this.startDate = startDate;
    this.questions = questions;
  }
}





// import React from 'react'
// import {makeObservable, action, observable} from "mobx";
// import {CreateTest} from "../api/testApi";
//
// class TestStore{
//     test = null
//     constructor() {
//         makeObservable(this,{
//             test: observable,
//             reset:action,
//             setTest:action,
//             }
//         )
//     }
//     reset(){
//         this.test = null
//     }
//     async setTest(title,description,group, startDate){
//         const res = await CreateTest(title,description,group,startDate)
//         console.log(res)
//         return res
//     }
// }
//
// export default new TestStore()
