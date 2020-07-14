import React from 'react';
import Comment from "../Comment/Comment.js";

const CommentContainer = ({comments, removeComment}) => {
  const cards = comments.map(comment => (
    <Comment {...comment} removeIdea = {removeComment} key = {comment.id} />
  ));

  return(
    <div>
      {cards}
    </div>
  );
};

export default CommentContainer;