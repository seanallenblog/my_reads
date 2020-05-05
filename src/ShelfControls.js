import React from 'react';

const ShelfControls = ({ updateShelf, bookData, currentShelf }) => {


  const handleSelect = (shelf) => {
    updateShelf(bookData, shelf);
  }

  return (
    <div className="book-shelf-changer">
      <select
        value={currentShelf}
        onChange={(e) => handleSelect(e.target.value)}>
        <option
          value="move"
          disabled>
          Move to...
        </option>
        <option
          value="currentlyReading">
          Currently Reading
        </option>
        <option
          value="wantToRead">
          Want to Read
        </option>
        <option
          value="read">
          Read
        </option>
        <option
          value="none">
          None
        </option>
      </select>
    </div>
  );
};

export default ShelfControls;