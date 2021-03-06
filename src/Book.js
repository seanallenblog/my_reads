import React from 'react';
import PropTypes from 'prop-types';
import ShelfControls from './ShelfControls';

const Book = ({ updateShelf, bookData, allUsersBooks }) => {
  let currentShelf;

  if (bookData.shelf) {
    currentShelf = bookData.shelf;
  } else {
    const existingBook = allUsersBooks.find(book => book.title === bookData.title);
    currentShelf = existingBook ? existingBook.shelf : 'none';
  }

  const authors = bookData.authors && bookData.authors.length > 0 ? bookData.authors : '';
  const coverImageURL = bookData.imageLinks && Object.keys(bookData.imageLinks).length > 0
    ? `url(${bookData.imageLinks.smallThumbnail})` : 'none';

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `${coverImageURL}` }}></div>
        <ShelfControls
          bookData={bookData}
          currentShelf={currentShelf}
          updateShelf={updateShelf}
        />
      </div>
      <div className="book-title">{bookData.title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

Book.propTypes = {
  bookData: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired,
  allUsersBooks: PropTypes.array.isRequired
}

export default Book;