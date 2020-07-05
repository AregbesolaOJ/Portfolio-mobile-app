import * as ActionTypes from '../actions/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case ActionTypes.BEGIN_API_CALL:
      return true;

    case ActionTypes.END_API_CALL:
      return false;

    default:
      return state;
  }
};
