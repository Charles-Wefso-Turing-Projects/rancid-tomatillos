import React, {Component} from 'react';
import Comment from "../Comment/Comment.js";
import { getComments } from "../apiCalls";

class CommentContainer extends Component  {
  constructor(){
    super();
    this.state = {
      comments: []
    }
  }
  
  componentDidMount() {
    this.getData()
  }
  
  componentDidUpdate() {
    if(!this.props.timeToUpdate) {
      return 
    }
    this.getData()
  }
  
  getData = () => {
    this.props.setTimeToUpdate(false)
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
    const cards = this.state.comments.map((comment, index) => (
      <Comment {...comment} key={comment.id || `comment-index-${index}`} />
    ));
    
    return(
      <div>
        {cards}
      </div>
    );
  }

};


export default CommentContainer;