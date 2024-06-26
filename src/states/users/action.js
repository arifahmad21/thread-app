/* eslint-disable no-alert */
import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

const receiveUserActionCreator = (users) => ({
  type: ActionType.RECEIVE_USERS,
  payload: {
    users,

  },
});

const asyncRegisterUser = ({ email, name, password }) => async () => {
  try {
    await api.register({ name, email, password });
  } catch (error) {
    alert(error.message);
  }
};

export {
  ActionType,
  receiveUserActionCreator,
  asyncRegisterUser,

};
