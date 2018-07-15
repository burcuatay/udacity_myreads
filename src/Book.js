import React from 'react'
import Changer from './Changer'

function Book(props) {
	const { book } = props; 
  	return(
    <li key={book.id}>
		<div className="book">
         <div className="book-top">
       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks?book.imageLinks.thumbnail :`http://via.placeholder.com/128x193?text=No%20Cover`}")` }}> </div>
                          <Changer
								book={book}
								moveTo={this.props.moveTo}/>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
									</li>
    )
}


export default Book