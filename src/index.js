import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import AddAuthorForm from './components/AddAuthorForm';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path='/add' element={<AddAuthorForm/>}/>
        </Routes>
        
    </BrowserRouter>
    // <App tab="home" />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
