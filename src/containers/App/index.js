import React, { Component } from "react";
import Header from "../../components/Header";
import { getBooksFromFakeXHR, addBooksToFakeXHR } from "../../lib/books.db.js";
import "./App.css";

const Title = ({ title }) =>
  <h1>
    {title}
  </h1>;

const Book = ({ title, author }) =>
  <li>
    <h3>
      {title}{" "}
    </h3>
    <p>
      {author}
    </p>
  </li>;

// const BookList = ({ books }) => (
//   <ul>
//     {books
//       .map(book => <Book title={book.title} author={book.author} />
//         )}
//   </ul>
//   );

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "Book List",
      books: []
    };
  }
  componentDidMount() {
    this.setState({
      books: getBooksFromFakeXHR
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Title title={this.state.title} />
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
