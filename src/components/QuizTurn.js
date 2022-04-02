import React from 'react'
import BookTitle from './BookTitle'

function QuizTurn({author, books}) {
  return (
      <div className='row turn' style={{ backgroundColor: "white" }}>
          <div className='col-4 offset-1'>
              <img src={author.imageUrl} className="authorImage" alt='Author' />
          </div>

          <div className='col-6'>
              {books.map(title => <BookTitle title = { title}/>)}
          </div>
          
    </div>
  )
}

export default QuizTurn