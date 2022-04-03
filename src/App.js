import React, { useState } from "react";
import PropTypes from 'prop-types';
import {shuffle, sample} from "underscore"
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import QuizContinue from "./components/QuizContinue";
import QuizTurn from "./components/QuizTurn";

import authors from "./authors";

const App = () => {
  const [highlight, setHighlight] = useState('');
  const getQuizTurnData = (authors) => {
    const allBooks = authors.reduce((prev, curr, i) => {
      return prev.concat(curr.books);
    }, []);

    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourRandomBooks);

    return {
      books: fourRandomBooks,
      author: authors.find(author => author.books.some(title => title === answer))
    }

  }

  const onAnswerSelected = (answer) => { 
    const isCorrect = getQuizTurnData(authors).books.some(book => book === answer);
    setHighlight(isCorrect ? 'correct' : 'wrong')
  }

  QuizTurn.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        imageSource: PropTypes.string.isRequired,
        books: PropTypes.arrayOf(PropTypes.string).isRequired
    }),

    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
    highlight: PropTypes.string.isRequired,

  }
 
    return (
      <div className="container-fluid">
        <Hero />
        <QuizTurn {...getQuizTurnData(authors)} highlight={highlight} onAnswerSelected={ onAnswerSelected}/>
        <QuizContinue />
        <Footer/>
      </div>
    );
  
  
}

export default App;
