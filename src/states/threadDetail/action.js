/* eslint-disable no-alert */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UPVOTE_THREAD_DETAIL: 'TOGGLE_UPVOTE_THREAD_DETAIL',
  TOGGLE_DOWNVOTE_THREAD_DETAIL: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
  CREATE_COMMENT_THREAD: 'CREATE_COMMENT_THREAD',
  TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
  TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
};

const receiveThreadDetailActionCreator = (threadDetail) => ({
  type: ActionType.RECEIVE_THREAD_DETAIL,
  payload: {
    threadDetail,
  },
});

const clearThreadDetailActionCreator = () => ({
  type: ActionType.CLEAR_THREAD_DETAIL,
});

const toggleUpVoteThreadDetailActionCreator = (userId) => ({
  type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
  payload: {
    userId,
  },
});

const toggleDownVoteThreadDetailActionCreato = (userId) => ({
  type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
  payload: {
    userId,
  },
});

const createCommentThreadActionCreator = (content) => ({
  type: ActionType.CREATE_COMMENT_THREAD,
  payload: {
    content,
  },
});

const toggleUpVoteCommentActionCreator = ({ commentId, userId }) => ({
  type: ActionType.TOGGLE_UPVOTE_COMMENT,
  payload: {
    commentId,
    userId,
  },
});

const toggleDownVoteCommentActionCreator = ({ commentId, userId }) => ({
  type: ActionType.TOGGLE_DOWNVOTE_COMMENT,
  payload: {
    commentId,
    userId,
  },
});

const asyncCreateCommentThread = ({ threadId, content }) => async (dispatch) => {
  try {
    const comment = await api.createComment({ threadId, content });
    dispatch(createCommentThreadActionCreator(comment));
  } catch (error) {
    alert(error.message);
  }
};

const asyncReceiveThreadDetail = (threadId) => async (dispatch) => {
  dispatch(showLoading());

  try {
    const threadDetail = await api.getThreadsDetail(threadId);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
  } catch (error) {
    alert(error.message);
  }

  dispatch(hideLoading());
};

const asyncToggleUpVoteThreadDetail = (commentId) => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState();
  dispatch(toggleUpVoteThreadDetailActionCreator(authUser.id));

  try {
    await api.upVoteThread(threadDetail.id, commentId);
  } catch (error) {
    alert(error.message);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
  }
};

const asyncToggleDownVoteThreadDetail = () => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState();
  dispatch(toggleDownVoteThreadDetailActionCreato(authUser.id));

  try {
    await api.downVoteThread(threadDetail.id);
  } catch (error) {
    alert(error.message);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
  }
};

const asyncToggleUpVoteComment = ({ threadId, commentId }) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleUpVoteCommentActionCreator({ threadId, commentId, userId: authUser.id }));

  try {
    await api.upVoteComment({ threadId, commentId });
  } catch (error) {
    dispatch(toggleUpVoteCommentActionCreator({ threadId, commentId, userId: authUser.id }));
    alert(error.message);
  }
};

const asyncToggleDownVoteComment = ({ threadId, commentId }) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleDownVoteCommentActionCreator({ threadId, commentId, userId: authUser.id }));

  try {
    await api.downVoteComment({ threadId, commentId });
  } catch (error) {
    alert(error.message);
    dispatch(toggleDownVoteCommentActionCreator({ threadId, commentId, userId: authUser.id }));
  }
};

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpVoteThreadDetailActionCreator,
  toggleDownVoteThreadDetailActionCreato,
  toggleUpVoteCommentActionCreator,
  toggleDownVoteCommentActionCreator,
  createCommentThreadActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncCreateCommentThread,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
};
