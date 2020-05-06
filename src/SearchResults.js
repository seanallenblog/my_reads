import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }
  }

  componentDidUpdate (prevProps) {
    const { searchTerm } = this.props;
    if (searchTerm !== prevProps.searchTerm) {
      BooksAPI.search(searchTerm)
        .then(searchResults => {
          this.setState(() => ({
            searchResults
          }));
        });
    }
  }

  render () {
    const results = this.state.searchResults;
    const { allUsersBooks, updateShelf } = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {
            results && results.length > 0 ?
              results.map(book => (
                <Book
                  key={book.id}
                  bookData={book}
                  updateShelf={updateShelf}
                  allUsersBooks={allUsersBooks} />
              )) : (
                <p>0 results for current search term</p>
              )
          }
        </ol>
      </div>
    );
  }
};

SearchResults.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired,
  allUsersBooks: PropTypes.array.isRequired
}

export default SearchResults;