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
    const { searchTermPrev } = prevProps;
    if (searchTerm !== searchTermPrev) {
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
    const { allUsersBooks } = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {
            results.map(book => (
              <BookThumbNail
                data={book}
                allUsersBooks={allUsersBooks} />
            ))
          }
        </ol>
      </div>
    );
  }
};

export default SearchResults;