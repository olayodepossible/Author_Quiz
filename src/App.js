import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import QuizContinue from "./components/QuizContinue";
import QuizTurn from "./components/QuizTurn";

import authors from "./authors";

const App = () => {
  const getQuizTurnData = (authors) => {
    const allBooks = authors.reduce((prev, curr, i) => {
      return prev.concat(curr.books);
    }, [])
  }
 
    return (
      <div className="container-fluid">
        <Hero />
        <QuizTurn author={authors[0]} books={ authors[0].books}/>
        <QuizContinue />
        <Footer/>
      </div>
    );
  
  
}

export default App;
