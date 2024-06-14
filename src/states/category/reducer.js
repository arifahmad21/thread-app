import { ActionType } from './action';

const categoryReducer = (category = '', action = {}) => {
  switch (action.type) {
    case ActionType.CATEGORY_ITEM:
      return action.payload.category === category ? '' : action.payload.category;
    default:
      return category;
  }
};

export default categoryReducer;
