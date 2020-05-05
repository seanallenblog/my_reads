import React from 'react';
import ShelfControls from './ShelfControls';

const BookThumbNail = ({ data, allUsersBooks }) => {
  console.log(data);
  console.log('All the books:', allUsersBooks);
  let currentShelf;

  if (data.shelf) {
    currentShelf = data.shelf;
  } else {
    const existingBook = allUsersBooks.find(book => book.title === data.title);
    currentShelf = existingBook.shelf;
  }


  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${data.imageLinks.smallThumbnail})` }}></div>
        <ShelfControls currentShelf={currentShelf} />
      </div>
      <div className="book-title">{data.title}</div>
      <div className="book-authors">{data.authors.join(', ')}</div>
    </div>
  );
};

export default BookThumbNail;