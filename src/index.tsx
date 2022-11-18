import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// const Main=()=>{
//     const [activeEditQuestionSidebar, setActiveEditQuestionSidebar] = useState(false)
//     const [question, setQuestion] = useState(null)
//     return(
//
//             <App/>
//
//     )
// }
ReactDOM.render(
  <App/>,
  document.getElementById('root') as HTMLElement
)
