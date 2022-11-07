import KeyboardIcon from '@mui/icons-material/Keyboard';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
export const editTestOptions=[
    {
        type:"Text Input",
        icon: <KeyboardIcon/>
    },
    {
        type:"Radio Buttons",
        icon: <RadioButtonCheckedIcon/>
    },
    {
        type:"Boolean",
        icon:<DoneOutlineIcon/>
    },
    {
        type:"MCQ",
        icon:<LibraryAddCheckIcon/>
    }
]


export const questionBlankets =[
    {
        type:"Radio Buttons",
        description: "Blanked description of the question",
        answers:{
            A:{
                value:'add answer',
                correct:false,
            },
            B:{
                value:'add answer',
                correct:false,
            },
            C:{
                value:'add answer',
                correct:false,
            },
            D:{
                value:'add answer',
                correct:false,
            },
        },
        point:1
    },
    {
        type:"Boolean",
        description: "add a question description",
        answers:{
            A:{
                value: true,
                correct: false
            },
            B:{
                value: false,
                correct: true
            }
        },
        point:1
    },
    {
        type:"Input text",
        description: "add a question description description",
        correctValue:"",
        point: 1,
    },
    {
        type: "MCQ",
        description: "add a question description",
        answers:{
            A:{
                value:'add answer',
                correct:true,
            },
            B:{
                value:'add answer',
                correct:true,
            },
            C:{
                value:'add answer',
                correct:false,
            },
            D:{
                value:'add answer',
                correct:false,
            },
        },
        point: 2
    }
]