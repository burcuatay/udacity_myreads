import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelves from './Shelves'

class Search extends React.Component{

state = {
    query:"",
  	books:[]
 }
  
enterKey (e)  {
  if(e.key === 'Enter'){
    BooksAPI.search(this.state.query, 20).then(data => {if (data){
    this.setState({books: data})
    }});
    console.log("Enter is pressed!");
  }
}

searchChange(query) {
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
              <ol className="books-grid"></ol>	
	<Shelves
			 
			/>
     </div>
    
    <Link className="close-search" to='/'>Back</Link>
 </div>
 </div>
  )
}
}

export default Search