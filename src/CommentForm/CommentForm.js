import React, {Component} from 'react';
import { postComment } from "../apiCalls";
import "./CommentForm.css";

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
    this.props.setTimeToUpdate(true)
  }

  render(){
    const {author, comment} = this.state;
    return(
      <section >
        <form aria-label="new-comment-form" className="new-comment-form" onSubmit = {this.handleSubmit}>
          <input
            type="text"
            className="author-input"
            value={author}
            placeholder="author"
            onChange = {this.handleChange}
          />
          <input 
            type="text"
            className="comment-input"
            value={comment}
            placeholder="comment"
            onChange= {this.handleChange}
          />
          <button>Add Comment</button>
        </form>
      </section>
    )
  }
}

export default CommentForm