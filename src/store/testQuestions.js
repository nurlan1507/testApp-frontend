import {observable, action, override, makeObservable, computed} from 'mobx'
import QuestionRadioButton from "../componets/QuestionRadioButton";
import QuestionMCQ from '../componets/QuestionMCQ'
import QuestionInputText from "../componets/QuestionInputText";
import QuestionBoolean from "../componets/QuestionBoolean"
class Question{
    changeData(){}
    draw(){}
    changeCorrect(key){}
}



class MCQ extends Question{
    type
    description
    answers={}
    point
    constructor(question) {
        super();
        this.type =question.type
        this.description = question.description
        this.answers = question.answers
    }

    changeDate(){

    }
    draw() {
        console.log(this)
        return <QuestionMCQ question={this}/>
    }
    changeCorrect(key, previousKey) {

    }
}
class RadioButton extends Question{
    type
    description
    answers={}
    point
    constructor(question) {
        super();
        this.type =question.type
        this.description = question.description
        this.answers = question.answers
        this.point = question.points
    }
    changeData() {

    }

    output(){
        console.log(this)
    }
    changeCorrect(key, previousKey) {
        this.answers[previousKey].correct = false
        this.answers[key].correct = (this.answers[key].correct !== true)
    }

    draw(){
        console.log(this)
        return <QuestionRadioButton question={this}/>
    }
}

class Boolean extends Question{
    type
    description
    correctAnswer
    point
    constructor(question) {
        super()
        this.type = question.type
        this.description = question.description
        this.answers = question.answers
        this.point = question.point
    }
    changeData() {

    }

    draw() {
        return <QuestionBoolean question={this}/>
    }
    changeCorrect(key, previousKey) {

    }

}

class InputText extends Question{
    type
    description
    correctAnswer
    point
    constructor(question) {
        super()
        this.type = question.type
        this.description = question.description
        this.correctAnswer = question.correctAnswer
        this.point = question.point
    }
    draw() {
        return <QuestionInputText question={this}/>
    }
    changeCorrect(key, previousKey) {

    }
    changeData() {

    }
}



class testQuestions{
    questions = null
    constructor(){
        this.questions =[]
        makeObservable(this,{
            questions : observable,
            appendQuestion : action,
        })
    }
    appendQuestion(question){
        if (this.questions) {
            this.questions.push(question)
        }
        console.log('new question has been added')
    }
}

export {MCQ,RadioButton,InputText,Boolean}
export default new testQuestions()