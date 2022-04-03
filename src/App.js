import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import authors from "./authors";

import AddAuthorForm from './components/AddAuthorForm';
import AuthorQuiz from "./components/AuthorQuiz";



const App = () => {
 
  return (
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<AuthorQuiz authors={ authors}/>}/>
            <Route exact path='/add' element={<AddAuthorForm authors={ authors}/>}/>
        </Routes>
        
    </BrowserRouter>
      
    );
  
  
}

export default App;
