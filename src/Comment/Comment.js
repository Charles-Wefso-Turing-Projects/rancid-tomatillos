import React from 'react';
import "./Comment.css";

const Comment = ({title, author, comment}) => {
  return(
    <section aria-label= "comment" className= "comment">
      <h4>{title}</h4>
      <h2>{author}</h2>
      <p>{comment}</p>
    </section>
  );
};

export default Comment;