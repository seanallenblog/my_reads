import React from 'react';
import Book from './Book';

const BookShelf = ({ shelfNamePretty, shelfName, allUsersBooks }) => {

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
                  data={book}
                  allUsersBooks={allUsersBooks}
                />
              </li>
            ))
          }

        </ol>
      </div>
    </div>
  );
};

export default BookShelf;