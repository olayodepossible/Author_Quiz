import React from 'react'

function BookTitle({title, onClick}) {
  return (
    <div className='answer' onClick={() => onClick(title)}>
        <h4>{title}</h4> 
    </div>
  )
}

export default BookTitle