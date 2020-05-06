import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelves from './BookShelves';
import Search from './Search';

class App extends Component {
  state = {
    allUsersBooks: []
  }

  componentDidMount () {
    this.getAllBooks();
  }

  getAllBooks () {
    BooksAPI.getAll()
      .then(allUsersBooks => {
        this.setState(() => ({
          allUsersBooks
        }))
      })
  }

  updateShelf (bookId, shelf) {
    BooksAPI.update(bookId, shelf)
      .then(res => {
        if (res) {
          this.getAllBooks();
        }
      }).catch(err => {
        console.error('something went wrong updating shelf:', err);
      })
  }

  render () {
    const { allUsersBooks } = this.state;
    return (
      <React.Fragment>
        <Route exact path='/' render={() => (
          <BookShelves
            allUsersBooks={allUsersBooks}
            updateShelf={(bookId, shelf) => this.updateShelf(bookId, shelf)} />
        )} />

        <Route path='/search' render={() => (
          <Search
            allUsersBooks={allUsersBooks}
            updateShelf={(bookId, shelf) => this.updateShelf(bookId, shelf)} />
        )} />
      </React.Fragment>
    )
  }
}

export default App;
