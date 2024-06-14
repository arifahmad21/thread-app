import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

const ThreadList = ({ threads, upVote, downVote }) => (
  <div className="m-6 border-solid border-2 rounded-lg border-[#E8CDAE] p-6">
    <h2 className="my-8 font-semibold text-yellow-800 text-4xl">Thread Tersedia</h2>
    {
        threads.map((thread) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <ThreadItem key={thread.id} {...thread} upVote={upVote} downVote={downVote} />
        ))
      }
  </div>
);

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default ThreadList;
