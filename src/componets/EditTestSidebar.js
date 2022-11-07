import React from 'react'
import {editTestOptions} from '../data/quesiton'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
const EditTestSidebar =()=>{
    return (
        <div className={'w-full min-h-screen'}>
            <List subheader={<SubHeader/>}>
            {editTestOptions.map((item)=>{
                return(
                    <ListItem key={item.type} disablePadding className={'w-full dark:bg-listItemDark-bg bg-main-bg dark:text-white h-fit'}>
                        <ListItemButton alignItems={'center'} className={'pt-10 '} onClick={()=>{
                            console.log(item.type)}}>
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
}


const SubHeader=()=>{
    return <h2 className={'font-medium uppercase p-5 text-center text-lg text-stone-500'}> select type of question</h2>
}
export default EditTestSidebar