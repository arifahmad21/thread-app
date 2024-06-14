/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import { AiFillLike, AiFillDislike, AiOutlineComment } from 'react-icons/ai';
import { postedAt } from '../../utils';

const ThreadItem = ({
  id, title, body, createdAt, category, upVotesBy, downVotesBy, totalComments,
  authUser, upVote, downVote, user,
}) => {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteThread = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownVoteThread = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  return (
    <div className="thread-item border-b pb-4">
      <div className="thread-item__title">
        <Link to={`/threads/${id}`} className="text-yellow-800 text-xl font-semibold hover:underline">{title}</Link>
      </div>
      <div className="thread-item__detail mt-2">
        <header className="flex justify-between">
          <div className="thread-item__header-right">
            <p className="thread-item__category text-gray-500">
              #{category}
            </p>
          </div>
        </header>
        <article className="text-gray-700 mt-2">
          {parser(body.substring(0, 200))} ...
        </article>
        <hr className="my-4" />
        <div className="flex items-center mb-6 ">
          {upVote && (
            <div className="px-1 thread-item__upvotes-thread flex items-center">
              <button type="button" onClick={onUpVoteThread} className="ml-2">
                {isUpVoted ? <AiFillLike className="text-[#856e52]" /> : <AiFillLike />}
              </button>
              <p className="ml-1">{upVotesBy.length}</p>
            </div>
          )}
          {downVote && (
            <div className="px-1 thread-item__downvotes-thread flex ">
              <button type="button" onClick={onDownVoteThread} className="ml-2">
                {isDownVoted ? <AiFillDislike className="text-[#c2c2c2]" /> : <AiFillDislike />}
              </button>
              <p className="ml-1">{downVotesBy.length}</p>
            </div>
          )}
          <div className="px-1 thread-item__total-comments flex items-center">
            <AiOutlineComment className="mr-1 ml-2" />
            <p>{totalComments}</p>
          </div>
          <p className="pl-6 thread-item__user-name text-gray-800">
            CreatedBy <span className='font-semibold'>{user.name}</span>
          </p>
          <p className="pl-2 thread-item__created-at text-gray-500">
            {postedAt(createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

ThreadItem.defaultProps = {
  upVote: null,
  downVote: null,
};

export { threadItemShape };

export default ThreadItem;
