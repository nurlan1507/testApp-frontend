import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {observer} from 'mobx-react-lite'
import {questionBlankets} from "../data/quesiton";
import {toJS} from "mobx";
import {editTestOptions} from '../data/quesiton'
import RootStore from '../store/rootStore'
import {RadioButton, MCQ} from '../store/testQuestions'
const EditTestSidebar =observer(()=>{
    const addAQuestion =(type:string)=>{
        // eslint-disable-next-line default-case
        switch (type){
            case "Radio Buttons":
                RootStore.testStore.addAQuestion(new RadioButton())
                break
            case "MCQ":
                RootStore.testStore.addAQuestion(new MCQ())
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
                            <ListItemIcon>
                                <item.icon/>
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
