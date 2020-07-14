import React from 'react';

const Comment = ({title, author, comment, id, removeIdea}) => {
  return(
    <div>
      <h4>{title}</h4>
      <h2>{author}</h2>
      <p>{comment}</p>
      <button onClick= {() => removeIdea(id)}>Delete</button>
    </div>
  );
};

export default Comment;