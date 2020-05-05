import React from 'react';

const ShelfControls = ({ currentShelf }) => {
  console.log('This is the current shelf:', currentShelf);
  return (
    <div className="book-shelf-changer">
      <select>
        <option
          value="move"
          disabled>
          Move to...
        </option>
        <option
          defaultValue={{ currentShelf }}
          value="currentlyReading">
          Currently Reading
        </option>
        <option
          defaultValue={{ currentShelf }}
          value="wantToRead">
          Want to Read
        </option>
        <option
          defaultValue={{ currentShelf }}
          value="read">
          Read
        </option>
        <option
          defaultValue={{ currentShelf }}
          value="none">
          None
        </option>
      </select>
    </div>
  );
};

export default ShelfControls;