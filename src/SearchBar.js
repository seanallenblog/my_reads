import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
  }

  handleInput (searchInput) {
    this.setState(() => ({
      searchInput
    }), this.props.updateSearchTerm(searchInput));
  }

  render () {
    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={(e) => this.handleInput(e.target.value)}
            placeholder="Search by title or author" />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  updateSearchTerm: PropTypes.func.isRequired
};

export default SearchBar;