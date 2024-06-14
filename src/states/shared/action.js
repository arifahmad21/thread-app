/* eslint-disable no-alert */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../thread/action';
import { receiveUserActionCreator } from '../users/action';

const asyncPopulateUsersAndThreads = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const users = await api.getAllUsers();
    const threads = await api.getAllThreads();

    dispatch(receiveUserActionCreator(users));
    dispatch(receiveThreadsActionCreator(threads));
  } catch (error) {
    alert(error.message);
  }

  dispatch(hideLoading());
};

// eslint-disable-next-line import/prefer-default-export
export { asyncPopulateUsersAndThreads };
