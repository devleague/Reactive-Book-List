import React from "react";
import Book from '../../components/Book';

const BookList = ({ books }) => (
  <ul>
    {books.map(book => <Book title={book.title} author={book.author} />)}
  </ul>
  );

export default BookList;