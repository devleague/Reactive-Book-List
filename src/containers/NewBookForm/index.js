import React, { Component } from "react";

class NewBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTitle: '',
      newAuthor:''
    };

    this.titleChange = this.titleChange.bind(this);
    this.authorChange = this.authorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    titleChange( event ){
      this.setState({
        newTitle : event.target.value
      });
    }

    authorChange( event ){
      this.setState({
        newAuthor : event.target.value
      });
    }

    handleSubmit( event ){
      event.preventDefault();
      this.props.childAddBook({
        title : this.state.newTitle,
        author : this.state.newAuthor
      });
      this.setState({
        newTitle: '',
        newAuthor: ''
      });
    }
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
    <div>
      <input type='text' value={this.state.newTitle}placeholder = 'title' onChange={this.titleChange} />
    </div>
    <div>
      <input type='text' value={this.state.newAuthor} placeholder='author' onChange={this.authorChange} />
    </div>
    <div>
      <button type="submit">Add Book</button>
    </div>
    </form>
    );
  }
}

export default NewBookForm;