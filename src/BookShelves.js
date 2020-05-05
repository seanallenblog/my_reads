import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import BookShelf from './BookShelf';

const BookShelves = ({ allUsersBooks, updateShelf }) => {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            allUsersBooks={allUsersBooks}
            shelfName='currentlyReading'
            shelfNamePretty='Currently Reading'
            updateShelf={updateShelf}
          />
          <BookShelf
            allUsersBooks={allUsersBooks}
            shelfName='wantToRead'
            shelfNamePretty='Want to Read'
            updateShelf={updateShelf}
          />
          <BookShelf
            allUsersBooks={allUsersBooks}
            shelfName='read'
            shelfNamePretty='Read'
            updateShelf={updateShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link className='plus-button' to='/search'>Add a book</Link>
      </div>
    </div>
  )
}

export default BookShelves;
