# Reactive Book List

React exercise - extendable for Redux

## Part 1

1. fork and clone this repo
1. use `create-react-app` to create a new app in this project directory
1. create a booklist app that loads books from `lib/books.db.js` via fake xhr
1. add a form to allow user to add books to the fake db
1. add an input text field to allow users to filter the book list


### Container and Component structure

```
  App Container
+----------------------------------------------------+
|                                                    |
|     BookListAppTitle                               |
|  +----------------------------+                    |
|  |                            |                    |
|  |  props.title               |                    |
|  +----------------------------+                    |
|                                                    |
|     BookFilterInput                                |
|  +----------------------------+                    |
|  |                            |                    |
|  |  input onChange setFilter  |                    |
|  +----------------------------+                    |
|                                                    |
|    BookList Container                              |
|  +----------------------------------------------+  |
|  |                                              |  |
|  |  for each props.books: Book                  |  |
|  |  +----------------------------------------+  |  |
|  |  |                                        |  |  |
|  |  |  props.title   props.author            |  |  |
|  |  +----------------------------------------+  |  |
|  +----------------------------------------------+  |
|                                                    |
|    NewBookForm Container                           |
|  +----------------------------------------------+  |
|  |                                              |  |
|  |  <form> handleSubmit                         |  |
|  |  handleChangeTitle                           |  |
|  |  handleChangeAuthor                          |  |
|  |  <button type="submit">                      |  |
|  |                                              |  |
|  +----------------------------------------------+  |
|                                                    |
+----------------------------------------------------+
```

### Project File Structure

```
.
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── components
    │   ├── Book.js
    │   ├── BookFilterInput.js
    │   └── BookListAppTitle.js
    ├── containers
    │   ├── App
    │   │   ├── index.js
    │   │   ├── index.test.js
    │   │   └── styles.css
    │   ├── BookList
    │   │   └── index.js
    │   └── NewBookForm
    │       └── index.js
    ├── index.css
    ├── index.js
    └── lib
        └── books.db.js
```

## Part 2

1. Add redux
