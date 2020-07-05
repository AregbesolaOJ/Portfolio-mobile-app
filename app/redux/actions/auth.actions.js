import * as ActionTypes from './actionTypes';
import { notifySuccess } from '../../utils';
import { beginApiCall, endApiCall } from './inProgress.actions';

const loginRequestSuccess = (user) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: ActionTypes.LOGOUT
});

export const login = (navigation) => async (dispatch) => {
  dispatch(beginApiCall());
  setTimeout(() => {
    // navigation.push('Dashboard');
    dispatch(loginRequestSuccess({ isLoggedIn: true }));
    dispatch(endApiCall());
    notifySuccess('Logged in Successfully');
  }, 3000);
};
