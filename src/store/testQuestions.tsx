import React,{ReactElement} from 'react'
import {observable, action, override, makeObservable, computed} from 'mobx'
import {IQuestion,IAnswer} from '../@types/types'
import Mcq from "../componets/questions/mcq"
import RadioButtonQuestion from "../componets/questions/radioButton"
import Boolean from "../componets/questions/boolean"
import Input from "../componets/questions/input"
export class MCQ implements IQuestion{
  type:string ;
  description: string;
  answers: Map<string, IAnswer>;
  point: number;
  constructor() {
      this.type ="multiple choice"
      this.description ="Description of multiple choce question"
      this.answers = new Map<string, IAnswer>([
        ["A", {value:"Answer A", correct:false}],["B", {value:"Answer B", correct:false}],["C", {value:"Answer C", correct:true}],["D", {value:"Answer D", correct:false}]
      ])
      this.point = 0
  }
  changeData(){}
  changeCorrect(key:string|null , previousKey:string|null){
  }
  draw():JSX.Element{
   return <Mcq question={this}/>
 }
}
export class RadioButton implements IQuestion{
  type:string ;
  description: string;
  answers: Map<string, IAnswer>;
  point: number;
  constructor() {
      this.type ="single response question"
      this.description ="Description of single choice question"
      this.answers = new Map<string, IAnswer>([
        ["A", {value:"Answer A", correct:false}],["B", {value:"Answer B", correct:false}],["C", {value:"Answer C", correct:true}],["D", {value:"Answer D", correct:false}]
      ])
      this.point = 0
  }
  changeData(){}
  changeCorrect(key:string|null, previousKey:string|null){}
  draw():JSX.Element{
    return <RadioButtonQuestion question={this}/>
  }

  // draw():React.FC{
  //       return <QuestionRadioButton question={this}/>
  // }
  // changeCorrect(key, previousKey) {
  //     this.answers[key].correct = this.answers[key].correct!==true
  // }
  // drawEditingMenu():React.Fc{
  //     return <EditMCQ question={this}></EditMCQ>
  // }
}


export class BooleanQuestion{
  type:string ;
  description: string;
  answers: Map<string, IAnswer>;
  point: number;
  constructor() {
      this.type ="Boolean"
      this.description ="Description of boolean question"
      this.answers = new Map<string, IAnswer>([
        ["A", {value:"true", correct:false}],["B", {value:"false", correct:false}]
      ])
      this.point = 1.0
  }
  changeData(){}
  changeCorrect(key:string|null, previousKey:string|null){}
  draw():JSX.Element{
    return <Boolean question={this}/>
  }
}

export class InputQuestion{
  type:string ;
  description: string;
  answers: Map<string, IAnswer>;
  point: number;
  constructor() {
      this.type ="Input question"
      this.description ="Description of question that requires input"
      this.answers = new Map<string, IAnswer>([
        ["answer", {value:"this is answer for this question ", correct:true}]
      ])
      this.point = 1.0
  }
  changeData(){}
  changeCorrect(key:string|null, previousKey:string|null){}
  draw():JSX.Element{
    return <Input question={this}/>
  }
}
