import {observable, action, override, makeObservable, computed} from 'mobx'
import QuestionRadioButton from "../componets/QuestionRadioButton";
import QuestionMCQ from '../componets/QuestionMCQ'
import QuestionInputText from "../componets/QuestionInputText";
import QuestionBoolean from "../componets/QuestionBoolean"
import {questionBlankets} from "../data/quesiton";
import EditInputText from "../componets/questionEditTools/EditInputText";
import EditBoolean from "../componets/questionEditTools/EditBoolean";
import EditMCQ from "../componets/questionEditTools/EditMVQ"
import EditInputRadio from "../componets/questionEditTools/EditRadio";
import {toJS} from 'mobx'
import {saveTestQuestions} from "../api/testApi";

class Question{
    changeData(){}
    draw(){}
    changeCorrect(key){}
    output(){}
    drawEditingMenu(){}
    resetChanges(newQuestion){}
    delete(){}
}



class MCQ extends Question{
    type
    description
    answers={}
    point
    order
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
        this.answers[key].correct = this.answers[key].correct!==true
    }
    output() {

    }
    resetChanges(newQuestion) {

    }
}
class RadioButton extends Question{
    type
    description
    answers={}
    point
    order
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
        console.log("RADIO")
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
    resetChanges(newQuestion) {
        this.type = newQuestion.type
        this.answers = newQuestion.answers
        this.description = newQuestion.description
    }
}

class Boolean extends Question{
    type
    description
    correctAnswer
    point
    order
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
        console.log("BOOLEan")
        if (previousKey){
            this.answers[previousKey].correct = false
            this.answers[key].correct = (this.answers[key].correct !== true)
            return
        }
        this.answers[key].correct = this.answers[key].correct!==true
    }
    output() {

    }

    resetChanges(newQuestion) {
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
    order
    constructor(question) {
        super()
        this.type = question.type
        this.description = question.description
        this.correctAnswer = question.correctValue
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
    resetChanges(newQuestion) {
        this.correctAnswer = newQuestion.correctAnswer
        this.description = newQuestion.description
        this.point = newQuestion.point
    }
}



class testQuestions{
    questions = null
    aw = null
    errors = null
    constructor(){
        this.questions =[]
        this.errors = new Map()
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
    deleteQuestion(ind){
        this.questions.splice(ind,1)
    }

    async saveTest(id){
        console.log(toJS(this.questions))
        console.log(questionBlankets[0])
        const result = await saveTestQuestions(toJS(this.questions),id)

    }
}

export {MCQ,RadioButton,InputText,Boolean}
export default new testQuestions()