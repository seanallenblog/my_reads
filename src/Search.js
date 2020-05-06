import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  updateSearchTerm (searchTerm) {
    this.setState(() => ({
      searchTerm
    }));
  }

  render () {
    const { allUsersBooks, updateShelf } = this.props;
    return (
      <div>
        <SearchBar updateSearchTerm={(searchTerm) => this.updateSearchTerm(searchTerm)} />
        <SearchResults
          searchTerm={this.state.searchTerm}
          updateShelf={updateShelf}
          allUsersBooks={allUsersBooks} />
      </div>
    );
  }
}

Search.propTypes = {
  allUsersBooks: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default Search;