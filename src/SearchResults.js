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

  componentDidUpdate (prevProps, prevState) {
    const { searchTerm } = this.props;
    const { searchTermPrev } = prevProps;
    console.log(searchTerm);
    console.log(searchTermPrev);
    if (searchTerm.length && searchTerm !== searchTermPrev) {
      console.log('Whiskey tango');
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
            results && results.length > 0 ?
              results.map(book => (
                <BookThumbNail
                  data={book}
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