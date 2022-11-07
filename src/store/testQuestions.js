import {observable, action} from 'mobx'
import QuestionRadioButton from "../componets/QuestionRadioButton";


class MCQ{
    type
    description
    answers={}
    point
    constructor(question) {
        this.type =question.type
        this.description = question.description
        this.answers = question.answers
    }
}
class RadioButton{
    type
    description
    answers={}
    point
    constructor(question) {
        this.type =question.type
        this.description = question.description
        this.answers = question.answers
        this.point = question.points
    }
    draw(){
        return <QuestionRadioButton/>
    }
}
class InputText{
    type
    description
    correctAnswer
    point
    constructor(question) {
        this.type = question.type
        this.description = question.description
        this.correctAnswer = question.correctAnswer
        this.point = question.point
    }

}



// class testQuestions{
//     questions =[]
//     constructor() {
//     }
// }

export {MCQ,RadioButton,InputText}