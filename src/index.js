import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Context = React.createContext()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        editQuestionSidebar: false
    }}>
        <App />
    </Context.Provider>
);



