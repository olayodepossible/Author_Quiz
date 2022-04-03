import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { shuffle, sample } from "underscore"

import "./App.css";

import authors from "./authors";

import AddAuthorForm from './components/AddAuthorForm';
import AuthorQuiz from "./components/AuthorQuiz";




const App = () => {

  const [data, setData] = useState(authors);
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

  const onAddAuthor = (data) => {
    setData(authors.push(data));
  }

  const onContinue = () => { 
    setData(authors);
    setHighlight('')
  }
 
  return (
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<AuthorQuiz {...getQuizTurnData(data)} highlight={highlight} onContinue={onContinue} onAnswerSelected={ onAnswerSelected}/>}/>
            <Route exact path='/add' element={<AddAuthorForm onAddAuthor={ onAddAuthor}/>}/>
        </Routes>
        
    </BrowserRouter>
      
    );
  
  
}

export default App;
