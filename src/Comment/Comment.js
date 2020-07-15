import React from 'react';

const Comment = ({title, author, comment, id, removeComment}) => {
  if(id === undefined){
    id = Date.now()
  }
  return(
    <div>
      <h4>{title}</h4>
      <h2>{author}</h2>
      <p>{comment}</p>
      <p>{id}</p>
      <button onClick={() => {removeComment(id)}}>Delete</button>
    </div>
  );
};

export default Comment;