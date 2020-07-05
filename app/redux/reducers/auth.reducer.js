import * as ActionTypes from '../actions/actionTypes';

const authDefaultState = { isLoggedIn: false, data: {} };

export default (state = authDefaultState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };

    case ActionTypes.LOGOUT:
      return { ...state, isLoggedIn: false };

    default:
      return state;
  }
};
