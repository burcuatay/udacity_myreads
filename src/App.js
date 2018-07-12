import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Shelves from './Shelves'
import Search from './Search'

class BooksApp extends React.Component {
  
  state = {
    allBooks:[],
    status: {}
 }

componentWillMount() {
	BooksAPI.getAll().then(books => {
	this.setState({allBooks: books});
	const allBooksId = books.map( book => book.id );
	const initialState = {
      currentlyReading:[],
      wantToRead:[],
      read:[]
    }
	books.forEach(b => initialState[ b.shelf ].push(b.id) );
	console.log(initialState, "initialState");
	this.setState({status: initialState });
	console.log(books);
})
}

moveTo (book, shelf) {
  book.shelf = shelf;
	BooksAPI.update(book, shelf).then(obj => {
    	
      	if (obj) {
          console.log(this.state, 'state')
         this.setState({status: obj, a:'b'})
          console.log(obj, "this is the obj")
        }
      
    })
  }


  render() {
    const { allBooks, status } = this.state;
const titles = {
       currentlyReading:'Currently Reading',
      wantToRead:'Want to Read',
      read:'Read'
}
console.log(status,'status')
	if (allBooks.length === 0) return null;
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
    {Object.keys(status).map(shelf=>{
      	const relatedBooks = [];
        status[shelf].forEach(bookId => relatedBooks.push.apply(relatedBooks, allBooks.filter(book => book.id === bookId)) )
         console.log(relatedBooks, 'relatedBooks', shelf)
         if (!relatedBooks) return null;
         return(
				<Shelves 
					key={shelf} 
					relatedBooks={relatedBooks}
					title={titles[shelf]} 
					moveTo={this.moveTo.bind(this)}/>
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
			<Search 
                
                />
              <div className="search-books-results">
              <ol className="books-grid"></ol>
              <Link className="close-search" to='/'>Back</Link>
    </div>
					)}
		/>


</div>
)}
       
}
export default BooksApp