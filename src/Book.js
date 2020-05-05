import React from 'react';
import ShelfControls from './ShelfControls';
import { update } from './BooksAPI';

const BookThumbNail = ({ updateShelf, bookData, allUsersBooks }) => {
  // console.log(bookData);
  // console.log('All the books:', allUsersBooks);
  let currentShelf;

  if (bookData.shelf) {
    currentShelf = bookData.shelf;
  } else {
    const existingBook = allUsersBooks.find(book => book.title === bookData.title);
    currentShelf = existingBook.shelf;
  }


  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookData.imageLinks.smallThumbnail})` }}></div>
        <ShelfControls
          bookData={bookData}
          currentShelf={currentShelf}
          updateShelf={updateShelf}
        />
      </div>
      <div className="book-title">{bookData.title}</div>
      <div className="book-authors">{bookData.authors.join(', ')}</div>
    </div>
  );
};

export default BookThumbNail;