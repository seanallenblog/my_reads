import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = ({ updateShelf, shelfNamePretty, shelfName, allUsersBooks }) => {
  const books = allUsersBooks.filter(book => book.shelf === shelfName);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfNamePretty}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map(book => (
              <li key={book.id}>
                <Book
                  bookData={book}
                  allUsersBooks={allUsersBooks}
                  updateShelf={updateShelf}
                />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  updateShelf: PropTypes.func.isRequired,
  shelfNamePretty: PropTypes.string.isRequired,
  shelfName: PropTypes.string.isRequired,
  allUsersBooks: PropTypes.array.isRequired
}

export default BookShelf;