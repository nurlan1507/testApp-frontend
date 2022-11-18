import {observable, action, override, makeObservable, computed} from 'mobx'
// import QuestionRadioButton from "../componets/QuestionRadioButton";
// import QuestionMCQ from '../componets/QuestionMCQ'
// import QuestionInputText from "../componets/QuestionInputText";
// import QuestionBoolean from "../componets/QuestionBoolean"
// import {questionBlankets} from "../data/quesiton";
// import EditInputText from "../componets/questionEditTools/EditInputText";
// import EditBoolean from "../componets/questionEditTools/EditBoolean";
// import EditMCQ from "../componets/questionEditTools/EditMVQ"
// import EditInputRadio from "../componets/questionEditTools/EditRadio";
import {questionBlankets} from '../data/quesiton'
import {IQuestion,IAnswer} from '../@types/types'

type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;


export class MCQ implements IQuestion{
  type:string ;
  description: string;
  answers: Map<string, IAnswer>;
  point: number;
  constructor() {
      this.type =""
      this.description =""
      this.answers = new Map()
      this.point = 0
  }
  changeData(){}
  changeCorrect(key:string|null , previousKey:string|null){

  }


  // draw():React.FC{
  //     return <QuestionMCQ question={this}/>
  // }
  // changeCorrect(key, previousKey) {
  //     this.answers[key].correct = this.answers[key].correct!==true
  // }
  // drawEditingMenu():React.Fc{
  //     return <EditMCQ question={this}></EditMCQ>
  // }
  // override drawEditingMenu():React.Fc{
  //   return <EditMCQ question={this}></EditMCQ>
  // }

}

export class RadioButton implements IQuestion{
  type:string ;
  description: string;
  answers: Map<string, IAnswer>;
  point: number;
  constructor() {
      this.type =""
      this.description =""
      this.answers = new Map()
      this.point = 0
  }
  changeData(){}
  changeCorrect(key:string|null, previousKey:string|null){}

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
