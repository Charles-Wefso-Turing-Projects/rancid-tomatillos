import React, {Component} from 'react';
import { postComment } from "../apiCalls";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      comment : "",
      movie_id : this.props.movie.id,
      id : Date.now
    };
  };

  handleChange = (e) => {
      const {name, value} = e.target;
      this.setState({[name] : value});
  };

  resetState = () => {
    this.setState({
      author : "",
      comment : ""
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    postComment(this.state)
    this.props.addComment(this.state);
    this.resetState();
  }

  render(){
    const {author, comment} = this.state;
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input
            type="text"
            name="author"
            value={author}
            placeholder="author"
            onChange = {this.handleChange}
          />
          <input 
            type="text"
            name="comment"
            value={comment}
            placeholder="comment"
            onChange= {this.handleChange}
          />
          <button>Add Comment</button>
        </form>
      </div>
    )
  }
}

export default CommentForm