import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentItemShape } from './CommentItem';

const CommentList = ({ comments, upVote, downVote }) => (
  <div className="m-6">
    <h3>
      Comment (
      {comments.length}
      )
    </h3>
    {
        comments.map((comment) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <CommentItem key={comment.id} {...comment} upVote={upVote} downVote={downVote} />
        ))
      }
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default CommentList;
