/* eslint-disable no-alert */
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UPVOTE_THREAD: 'TOGGLE_UPVOTE_THREAD',
  TOGGLE_DOWNVOTE_THREAD: 'TOGGLE_DOWNVOTE_THREAD',
  TOGGLE_NEUTRALVOTE_THREAD: 'TOGGLE_NEUTRALVOTE_THREAD',
};

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREAD,
  payload: {
    thread,
  },
});

const toggleUpVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_UPVOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const toggleDownVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_DOWNVOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const asyncAddThread = ({ title, body, category = '' }) => async (dispatch) => {
  try {
    const thread = await api.createThread({ title, body, category });
    dispatch(addThreadActionCreator(thread));
  } catch (error) {
    alert(error.message);
  }
};

const asyncToggleUpVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.upVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncToggleDownVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.downVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }
};

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
};
