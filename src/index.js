import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Bars} from './context'
const Main=()=>{
    const [activeEditQuestionSidebar, setActiveEditQuestionSidebar] = useState(false)
    const [question, setQuestion] = useState(null)
    return(
        <Bars.Provider value={{activeEditQuestionSidebar,setActiveEditQuestionSidebar,question,setQuestion}}>
            <App/>
        </Bars.Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Main/>
);



