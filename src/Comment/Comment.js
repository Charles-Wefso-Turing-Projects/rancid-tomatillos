import React from 'react';
import "./Comment.css";
import PropTypes from 'prop-types';

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

Comment.propTypes = {
  author : PropTypes.string,
  comment : PropTypes.string,
  id : PropTypes.number,
  movie_id : PropTypes.number
}