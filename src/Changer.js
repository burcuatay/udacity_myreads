import React from 'react'
import PropTypes from 'prop-types'



function Changer(props) {
		const { book, moveTo } = props; 
		return (
		<div className="book-shelf-changer">
				<select value={book.shelf ? book.shelf : 'none'} onChange={(event) => moveTo(book, event.target.value)}>
				       <option value="move" disabled>Move to...</option>
				       <option value="currentlyReading">Currently Reading</option>
				       <option value="wantToRead">Want to Read</option>
				       <option value="read">Read</option>
				       <option value="none">None</option>
				</select>
			</div>
		)
}

Changer.propTypes = {
	moveTo: PropTypes.func.isRequired,	
  	book: PropTypes.object.isRequired
}

export default Changer;