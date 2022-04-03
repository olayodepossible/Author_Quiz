import React from 'react'
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

import QuizTurn from "./QuizTurn";
import Footer from "./Footer";
import Hero from "./Hero";
import QuizContinue from "./QuizContinue";

function AuthorQuiz({author, books, highlight, onContinue, onAnswerSelected}) {

    // input validation
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
        <QuizTurn author={author} books={books} highlight={highlight} onAnswerSelected={onAnswerSelected} />
        <p> <Link to= '/add'>Add an author</Link></p>
        <QuizContinue show={highlight === 'correct'} onContinue={onContinue} />
        <Footer/>
      </div>
  )
}

export default AuthorQuiz