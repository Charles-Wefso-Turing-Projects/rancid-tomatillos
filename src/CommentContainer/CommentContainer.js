import React, {Component} from 'react';
import Comment from "../Comment/Comment.js";
import { render } from 'enzyme';
import { getComments } from "../apiCalls";

class CommentContainer extends Component  {
  constructor({movie, removeComment}){
    super({movie, removeComment});
    this.state = {
      comments: []
    }
  }
  
  componentDidMount() {
    getComments()
    .then((data) => {
      this.setState({
        comments: data.comments.filter(comment => comment.movie_id === this.props.movie.id)
      });
    })
    .catch((error) => {
      console.log(error);
      alert(`yo, this is wrong:  ${error}`);
    });
  }
  
  
  render() {
    const cards = this.state.comments.map(comment => (
      <Comment {...comment} removeComment = {this.props.removeComment} key = {comment.id} />
    ));
    
    return(
      <div>
        {cards}
      </div>
    );
  }

};


export default CommentContainer;