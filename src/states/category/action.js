const ActionType = {
  CATEGORY_ITEM: 'CATEGORY_ITEM',
};

const setCategoryActionCreator = (category) => ({
  type: ActionType.CATEGORY_ITEM,
  payload: { category },
});

export {
  ActionType,
  setCategoryActionCreator,
};
