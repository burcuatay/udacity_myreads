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
  
enterKey (e)  {
  if(e.key === 'Enter' && searchTerms.includes(this.state.query)){
    BooksAPI.search(this.state.query, 20).then(data => {if (data){
    this.setState({books: data})
    }});
  }
}

searchChange(query) {
if(query === "") {
  this.setState({books: []})
}

this.setState({query});
}

render(){
  return (
   <div>
     
   <div className="search-books">
     
     <div className="search-books-bar">
            <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onKeyDown={this.enterKey.bind(this)} onChange={(event)=> this.searchChange(event.target.value)} value={this.state.query}/>
            </div>
      </div>
    
     <div className="search-books-results">
              <ol className="books-grid">
				{this.state.books.map((book) => {
          console.log(book.imageLinks ? book.imageLinks.thumbnail: 'no cover', "book here!!!")
								return(
									<Book  
                 					book={book}
                                  	moveTo={this.props.moveTo}
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