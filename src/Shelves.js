import React, { Component } from 'react'
import Changer from './Changer'

class Shelves extends Component{

	render(){

		return(
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.allBooks
							.filter(book => book.shelf)
							.map((book) => {
								return(
									<li key={book.id}>
									<div className="book">
                          			<div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks?book.imageLinks.thumbnail:`http://via.placeholder.com/128x193?text=No%20Cover`}")` }}> </div>
                          <Changer
								book={book}
								moveTo={moveTo}/>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
									</li>
								)
							})}
					</ol>
				</div>
			</div>
		)
	}
}


export default Shelves