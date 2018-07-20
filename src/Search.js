import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import searchTerms from './searchTerms'

class Search extends React.Component{

state = {
    query:"",
  	books:[]
 }
  
searchChange(query) {
if(query === "") {
  this.setState({books: []})
}

this.setState({query});

 if(searchTerms.includes(query)){
    BooksAPI.search(this.state.query, 20).then(data => {if (data){
    this.setState({books: data})
    }});
  }
}



render(){
  const checkShelves = (book) => {
	let shelf = 'None';
	Object.keys(this.props.status).forEach(shelfKey=>{
		if (this.props.status[shelf].includes(book.id)){
		shelf = shelfKey;
		}
	})
	return shelf
}

  return (
   <div>
     
   <div className="search-books">
     
     <div className="search-books-bar">
            <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event)=> this.searchChange(event.target.value)} value={this.state.query}/>
            </div>
      </div>
    
     <div className="search-books-results">
              <ol className="books-grid">
				{this.state.books.map((book) => {
                 const currentBookShelf = checkShelves(book)
								return(
									<Book  
                 					book={book}
                                  	moveTo={this.props.moveTo}
									shelf={currentBookShelf}
                                  />
								)
							})}
</ol>	

     </div>
    
    <Link className="close-search" to='/'>Back</Link>
 </div>
 </div>
  )
}
}

export default Search