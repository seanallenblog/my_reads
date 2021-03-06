import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './App.css';
import BookShelf from './BookShelf';

const BookShelves = ({ allUsersBooks, updateShelf }) => {
  return (
    <React.Fragment>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            allUsersBooks={allUsersBooks}
            shelfName='currentlyReading'
            shelfNamePretty='Currently Reading'
            updateShelf={updateShelf} />
          <BookShelf
            allUsersBooks={allUsersBooks}
            shelfName='wantToRead'
            shelfNamePretty='Want to Read'
            updateShelf={updateShelf} />
          <BookShelf
            allUsersBooks={allUsersBooks}
            shelfName='read'
            shelfNamePretty='Read'
            updateShelf={updateShelf} />
        </div>
      </div>
      <div className="open-search">
        <Link className='plus-button' to='/search'>Add a book</Link>
      </div>
    </React.Fragment>
  )
}

BookShelves.propTypes = {
  allUsersBooks: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default BookShelves;
