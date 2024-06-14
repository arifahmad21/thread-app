/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { postedAt } from '../../utils';

const ThreadDetail = ({
  id,
  authUser,
  title,
  createdAt,
  body,
  owner,
  category,
  upVotesBy,
  downVotesBy,
  upVoteThread,
  downVoteThread,
}) => {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  return (
    <section className="thread-detail bg-white rounded-lg shadow-md p-4">
      <div className="thread-detail__title mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="thread-detail-item">
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="thread-detail__owner-avatar mr-2">
              <img src={owner.avatar} alt={owner.name} className="w-8 h-8 rounded-full" />
            </div>
            <div className="thread-detail__owner-info">
              <p className="text-gray-700">{owner.name}</p>
              <p className="text-gray-500">{postedAt(createdAt)}</p>
            </div>
          </div>
          <div className="thread-detail__header-right">
            <p className="text-blue-500">
              #
              {category}
            </p>
          </div>
          // eslint-disable-next-line react/jsx-no-comment-textnodes
        </header>
        // eslint-disable-next-line react/no-danger, react/no-danger
        <article className="text-gray-800" dangerouslySetInnerHTML={{ __html: body }} />
        <div className="thread-detail__footer mt-4 flex items-center">
          <div className="thread-detail__upvotes-thread mr-4">
            <p className="flex items-center">
              <button
                type="button"
                onClick={() => upVoteThread(id)}
                className={`focus:outline-none ${isUpVoted ? 'text-blue-500' : 'text-gray-500'}`}
              >
                {isUpVoted ? (
                  <AiFillLike className="w-6 h-6 mr-1" />
                ) : (
                  <AiFillLike className="w-6 h-6 mr-1" />
                )}
              </button>
              {upVotesBy.length}
            </p>
          </div>
          <div className="thread-detail__downvotes-thread">
            <p className="flex items-center">
              <button
                type="button"
                onClick={() => downVoteThread(id)}
                className={`focus:outline-none ${isDownVoted ? 'text-red-500' : 'text-gray-500'}`}
              >
                {isDownVoted ? (
                  <AiFillDislike className="w-6 h-6 mr-1" />
                ) : (
                  <AiFillDislike className="w-6 h-6 mr-1" />
                )}
              </button>
              {downVotesBy.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVoteThread: PropTypes.func.isRequired,
  downVoteThread: PropTypes.func.isRequired,
};

export default ThreadDetail;
