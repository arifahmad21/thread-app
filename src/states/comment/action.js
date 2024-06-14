/* eslint-disable no-alert */
import api from '../../utils/api';

const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
  RECEIVE_COMMENT: 'RECEIVE_COMMENT',
};

const addCommentActionCreator = (content) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    content,
  },
});

const receiveCommentActionCreator = (contents) => ({
  type: ActionType.RECEIVE_COMMENT,
  payload: {
    contents,
  },
});

const asyncAddComment = (threadId, content) => async (dispatch) => {
  try {
    const commentThread = await api.createComment(threadId, content);
    dispatch(addCommentActionCreator(commentThread));
  } catch (error) {
    alert(error.message);
  }
};

export {
  addCommentActionCreator,
  receiveCommentActionCreator,
  asyncAddComment,
  ActionType,
};
