import React from 'react'
import {editTestOptions} from '../data/quesiton'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import testQuestions, {InputText, MCQ, RadioButton, Boolean as BooleanQuestion} from '../store/testQuestions'
import {observer} from 'mobx-react-lite'
import {questionBlankets} from "../data/quesiton";
import {toJS} from "mobx";

const EditTestSidebar =observer(()=>{
    const addAQuestion =(type)=>{
        // eslint-disable-next-line default-case
        switch (type){
            case "Radio Buttons":
                testQuestions.appendQuestion(new RadioButton(JSON.parse(JSON.stringify(questionBlankets[0]))))
                console.log(toJS(testQuestions.questions))
                break
            case "MCQ":
                testQuestions.appendQuestion(new MCQ( JSON.parse(JSON.stringify(questionBlankets[3]))))
                console.log(toJS(testQuestions.questions))
                break
            case "Text Input":
                testQuestions.appendQuestion(new InputText( JSON.parse(JSON.stringify(questionBlankets[2]))))
                console.log(toJS(testQuestions.questions))
                break
            case "Boolean":
                testQuestions.appendQuestion(new BooleanQuestion( JSON.parse(JSON.stringify(questionBlankets[1]))))
                console.log(toJS(testQuestions.questions))
                break
        }

    }
    return (

        <div className={'w-1/4 fixed top-0 left-0'}>
            <List subheader={<SubHeader/>}>
            {toJS(editTestOptions).map((item)=>{
                return(
                    <ListItem key={item.type} disablePadding className={'w-full dark:bg-listItemDark-bg bg-main-bg dark:text-white h-fit'}>
                        <ListItemButton alignItems={'center'} className={'pt-10 '} onClick={(e)=>{
                            addAQuestion(item.type)
                        }}>
                            <ListItemIcon button={true} autoFocus={true}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>{item.type}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                )
            })}
            </List>
        </div>
    );
})


const SubHeader=()=>{
    return <h2 className={'font-medium uppercase p-5 text-center text-lg text-stone-500'}> select type of question</h2>
}
export default EditTestSidebar