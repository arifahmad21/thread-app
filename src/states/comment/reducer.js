import { ActionType } from './action';

const commentReducer = (contents = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_COMMENT:
      return action.payload.contents;
    case ActionType.ADD_COMMENT:
      return [action.payload.content, ...contents];
    default:
      return contents;
  }
};

export default commentReducer;
