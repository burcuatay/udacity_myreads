import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Shelves from './Shelves'

class BooksApp extends React.Component {
  
  state = {
    allBooks:[],
    status:['Currently Reading', 'Want to Read', 'Read'],
  }

componentDidMount() {
	BooksAPI.getAll().then(books => (
	this.setState({allBooks: books})
	))
	}

moveTo = (book, shelf) => {
	BooksAPI.update(book, shelf)
  }


  render() {
    return (
      <div className="app">
       
<Route 
     exact path='/' render={() => (
    	
    	<div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>

      	<div className="list-books-content">
    		<div>
    		{this.state.status.map(shelf => {
				return(
				<Shelves 
					key={shelf} 
					allBooks={this.state.allBooks}
					title={shelf} 
					moveTo={this.moveTo}/>
				)
			})}
			</div>
        </div>
    
        <div className="open-search">
    	<Link
          to="/search" 
          className="bookSearch" 
          >Add a book </Link>
            </div> 
    
    	</div>
   )}
/>

<Route
	path='/search'
		render={() => (
			<div>
                
              <div className="search-books">
                
            	<div className="search-books-bar">
                       <div className="search-books-input-wrapper">
                	   <input type="text" placeholder="Search by title or author"/>
                	   </div>
                 </div>
                
               <div className="search-books-results">
              		   <ol className="books-grid"></ol>
              		   <Link className="close-search" to='/'>Back</Link>
               </div>
                
             </div>
            </div>
					)}
		/>


</div>
)}
       
}
export default BooksApp