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

  updateSearchTerm = (searchTerm) => {
    this.setState(() => ({
      searchTerm
    }))
  }

  render () {

    return (
      <div>
        <SearchBar updateSearchTerm={this.updateSearchTerm} />
        <SearchResults searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

Search.propTypes = {
  allUsersBooks: PropTypes.array.isRequired,
};

export default Search;