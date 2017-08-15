import React, { Component } from "react";
import Header from "../../components/Header";
import { getBooksFromFakeXHR, addBookToFakeXHR } from "../../lib/books.db.js";
import "./App.css";
import BookListAppTitle from "../../components/BookListAppTitle";
import BookList from "../BookList/index";
import NewBookForm from "../NewBookForm";
import BookFilterInput from "../../components/BookFilterInput";

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "Book List",
      books: [],
      searchFilter: ''
    };
    this.parentAddBook = this.parentAddBook.bind(this);
    this.setSearchFilter = this.setSearchFilter.bind(this);
  }

  setSearchFilter(event) {
    const searchFilter = event.target.value;
    this.setState({ searchFilter });
  }
  parentAddBook(newBook) {
    addBookToFakeXHR(newBook)
    .then(books => {
      this.setState({books:books});
    });
  }

  componentDidMount() {
    getBooksFromFakeXHR().then(booklist => {
      this.setState({ books: booklist });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <BookListAppTitle title={this.state.title} />
        <p className="App-intro" />
        <BookFilterInput setSearchFilter={this.setSearchFilter}/>
        <BookList books={this.state.books}
        searchFilter={this.state.searchFilter} />
        <NewBookForm childAddBook={this.parentAddBook} />
      </div>
    );
  }
}

export default App;
