import KeyboardIcon from '@mui/icons-material/Keyboard';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
export const questionBlankets =[
    {
        type:"Radio Buttons",
        description: "Blanked description of the question",
        answers:{
            A:{
                value:'add answer1',
                correct:false,
            },
            B:{
                value:'add answer2',
                correct:false,
            },
            C:{
                value:'add answer3',
                correct:false,
            },
            D:{
                value:'add answer4',
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
                value: "True",
                correct: false
            },
            B:{
                value: "False",
                correct: false
            }
        },
        point:1
    },
    {
        type:"Input text",
        description: "add a question description description",
        correctValue:"asdasdasdasdasdasdasda",
        point: 1,
    },
    {
        type: "MCQ",
        description: "add a question description",
        answers:{
            A:{
                value:'add answer1',
                correct:true,
            },
            B:{
                value:'add answer2',
                correct:true,
            },
            C:{
                value:'add answer3',
                correct:false,
            },
            D:{
                value:'add answer4',
                correct:false,
            },
        },
        point: 2
    }
]



export const editTestOptions=[
    {
        type:"Text Input",
        icon: KeyboardIcon,
    },
    {
        type:"Radio Buttons",
        icon: RadioButtonCheckedIcon,
    },
    {
        type:"Boolean",
        icon:DoneOutlineIcon,
    },
    {
        type:"MCQ",
        icon:LibraryAddCheckIcon,
    }
]
