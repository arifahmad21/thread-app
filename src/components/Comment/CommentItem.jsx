import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import parser from 'html-react-parser';
import { postedAt } from '../../utils';

const CommentItem = ({
  id,
  owner,
  createdAt,
  content,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  authUser,
}) => {
  const liked = upVotesBy.includes(authUser.id);
  const disliked = downVotesBy.includes(authUser.id);

  const onUpVoteComment = (event) => {
    event.stopPropagation();
    if (upVote) upVote(id);
  };

  const onDownVoteComment = (event) => {
    event.stopPropagation();
    if (downVote) downVote(id);
  };

  return (
    <>
      <div className="my-4">
        <header className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <img src={owner.avatar} alt={owner.name} className="w-8 h-8 rounded-full mr-2" />
            <p className="text-sm font-semibold">{owner.name}</p>
          </div>
          <p className="text-gray-500 text-xs">{postedAt(createdAt)}</p>
        </header>
        <article className="text-sm">{parser(content)}</article>
        <div className="flex items-center mt-2">
          {upVote && (
            <button
              type="button"
              onClick={onUpVoteComment}
              className={`flex items-center mr-3 ${liked ? 'text-[#856e52]' : 'text-gray-500'}`}
            >
              {liked ? <AiFillLike className="w-5 h-5 mr-1" /> : <AiFillLike className="w-5 h-5 mr-1" />}
              {upVotesBy.length}
            </button>
          )}
          {downVote && (
            <button
              type="button"
              onClick={onDownVoteComment}
              className={`flex items-center ${disliked ? 'text-[#c2c2c2]' : 'text-gray-500'}`}
            >
              {disliked ? <AiFillDislike className="w-5 h-5 mr-1" /> : <AiFillDislike className="w-5 h-5 mr-1" />}
              {downVotesBy.length}
            </button>
          )}
        </div>
      </div>
      <hr className="my-4" />
    </>
  );
};

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentItemShape = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

CommentItem.propTypes = {
  ...commentItemShape,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
};

CommentItem.defaultProps = {
  upVote: null,
  downVote: null,
};

export { commentItemShape };
export default CommentItem;
