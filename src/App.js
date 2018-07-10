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
      book.shelf = shelf
      this.setState((state) => ({
        allBooks: state.allBooks.filter((bk) => (
          bk.id !== book.id
          )).concat(shelf !== 'none' ? [book]: []) 
      }))
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
    		{this.state.status.map(shelf => {
				return(
				<Shelves 
					key={shelf} 
					allBooks={this.state.allBooks}
					title={this.title} 
					moveTo={this.moveTo}/>
				)
			})}
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
                        <Link className="close-search" to='/'>Back</Link>
                    </div>
					)}
				/>

</div>
)}




       /*
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
         
               
                     
            */
       
}
export default BooksApp