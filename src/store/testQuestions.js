import {observable, action, override, makeObservable, computed} from 'mobx'
import QuestionRadioButton from "../componets/QuestionRadioButton";
import QuestionMCQ from '../componets/QuestionMCQ'
import QuestionInputText from "../componets/QuestionInputText";
import QuestionBoolean from "../componets/QuestionBoolean"

import EditInputText from "../componets/questionEditTools/EditInputText";
import EditBoolean from "../componets/questionEditTools/EditBoolean";
import EditMCQ from "../componets/questionEditTools/EditMVQ"
import EditInputRadio from "../componets/questionEditTools/EditRadio";
class Question{
    changeData(){}
    draw(){}
    changeCorrect(key){}
    output(){}
    drawEditingMenu(){}
    saveChanges(newQuestion){}
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
    drawEditingMenu() {
        return <EditMCQ question={this}></EditMCQ>
    }

    changeDate(){

    }
    draw() {
        return <QuestionMCQ question={this}/>
    }
    changeCorrect(key, previousKey) {

    }
    output() {

    }
    saveChanges(newQuestion) {

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
    drawEditingMenu() {
        return <EditInputRadio question={this}/>
    }

    output(){

    }
    changeCorrect(key, previousKey) {
        if (previousKey){
            this.answers[previousKey].correct = false
            this.answers[key].correct = (this.answers[key].correct !== true)
            return
        }
        this.answers[key].correct = this.answers[key].correct!==true
    }

    draw(){
        console.log(this)
        return <QuestionRadioButton question={this}/>
    }
    saveChanges(newQuestion) {

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
    drawEditingMenu() {
        return <EditBoolean question={this}/>
    }

    changeData() {

    }

    draw() {
        return <QuestionBoolean question={this}/>
    }
    changeCorrect(key, previousKey) {
        if (previousKey){
            this.answers[previousKey].correct = false
            this.answers[key].correct = (this.answers[key].correct !== true)
            return
        }

        this.answers[key].correct = this.answers[key].correct!==true
    }
    output() {

    }

    saveChanges(newQuestion) {
        this.answers = newQuestion.answers
        this.description = newQuestion.description
        this.point = newQuestion.point
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
    drawEditingMenu() {
        return <EditInputText question={this}/>
    }

    output() {

    }

    draw() {
        return <QuestionInputText question={this}/>
    }
    changeCorrect(key, previousKey) {

    }
    changeData() {

    }
    saveChanges(newQuestion) {
        this.correctAnswer = newQuestion.correctAnswer
        this.description = newQuestion.description
        this.point = newQuestion.point
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
    }
}

export {MCQ,RadioButton,InputText,Boolean}
export default new testQuestions()