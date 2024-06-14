import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../auth/action';

const ActionType = {
  SET_IS_PREALOAD: 'SET_IS_PREALOAD',

};

const setIsPreloadActionCreator = (isPreload) => ({
  type: ActionType.SET_IS_PREALOAD,
  payload: {
    isPreload,
  },
});

const asyncPreloadProcess = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const authUser = await api.getOwnProfile();
    dispatch(setAuthUserActionCreator(authUser));
  } catch (error) {
    dispatch(setAuthUserActionCreator(null));
  } finally {
    dispatch(setIsPreloadActionCreator(false));
  }
  dispatch(hideLoading());
};

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess,
};
