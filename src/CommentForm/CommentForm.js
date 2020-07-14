import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : "",
      author: "",
      content : ""
    };
  };

  handleChange = (e) => {
      const {name, value} = e.target;
      this.setState({[name] : value});
  };

  resetState = () => {
    this.setState({
      title : "",
      author : "",
      content : ""
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state);
    this.resetState();
  }

  render(){
    const {title, author, content} = this.state;
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
        <input
            type="text"
            name="title"
            value={title}
            placeholder="title"
            onChange = {this.handleChange}
          />
          <input
            type="text"
            name="author"
            value={author}
            placeholder="author"
            onChange = {this.handleChange}
          />
          <input 
            type="text"
            name="content"
            value={content}
            placeholder="content"
            onChange= {this.handleChange}
          />
          <button>Add Comment</button>
        </form>
      </div>
    )
  }
}

export default CommentForm