import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Search(props) {

  
  return (
   <div>
     
   <div className="search-books">
     
     <div className="search-books-bar">
            <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
            </div>
      </div>
     
  </div>
 </div>
  )
}


Search.propTypes = {
	moveTo: PropTypes.func.isRequired,	
  	book: PropTypes.object.isRequired
}