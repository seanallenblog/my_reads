import React, { Component } from 'react';
import BookThumbNail from './Book';
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
    console.log(searchTerm);
    if (searchTerm !== '' && searchTerm !== prevProps.searchTerm) {
      BooksAPI.search(searchTerm)
        .then(searchResults => {
          this.setState(() => ({
            searchResults
          }));
        });
    }
  }

  render () {
    console.log('props search results:', this.props);
    const results = this.state.searchResults;
    const { allUsersBooks } = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {
            results && results.length > 0 ?
              results.map(book => (
                <BookThumbNail
                  key={book.id}
                  bookData={book}
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

export default SearchResults;