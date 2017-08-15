import React from "react";
const Book = ({ title, author }) =>
  <li>
    <h3>
      {title}{" "}
    </h3>
    <p>
      {author}
    </p>
  </li>;

export default Book;