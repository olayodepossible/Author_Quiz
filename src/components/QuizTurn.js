import React from 'react'
import BookTitle from './BookTitle'

function QuizTurn({ author, books, highlight, onAnswerSelected }) {
  
  const highlightBgColor = (highlight) => {
    const mappingColor = {
      "none": "",
      "correct": "green",
      "wrong": "red"
    }
    return mappingColor[highlight]
  }
  return (
      <div className='row turn' style={{ backgroundColor: highlightBgColor(highlight) }}>
          <div className='col-4 offset-1'>
              <img src={author.imageUrl} className="authorImage" alt='Author' />
          </div>

          <div className='col-6'>
            {books.map(title => <BookTitle key={title} title={title} onClick ={onAnswerSelected} />)}
          </div>
          
    </div>
  )
}

export default QuizTurn