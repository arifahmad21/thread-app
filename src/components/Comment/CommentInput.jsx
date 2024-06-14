import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CommentInput = ({ addComment }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() !== '') {
      addComment(content);
      setContent('');
    }
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="m-6">
      <h3>New comment :</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <textarea
            className="w-5/6 text-lg max-h-64 mr-4 overflow-auto p-2 border-2 border-yellow-800 rounded-md"
            value={content}
            onChange={handleChange}
            placeholder="Create new comment"
          />
          <button type="submit">+</button>
        </div>
      </form>
    </div>
  );
};

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
