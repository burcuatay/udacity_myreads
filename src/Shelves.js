import React, { Component } from 'react'
import Changer from './Changer'
import Book from './Book'


class Shelves extends Component{

	render(){

		return(
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.relatedBooks
							.map((book) => {
          console.log(book.imageLinks ? book.imageLinks.thumbnail: 'no cover', "book here!!!")
								return(
									<Book />
								)
							})}
					</ol>
				</div>
			</div>
		)
	}
}


export default Shelves