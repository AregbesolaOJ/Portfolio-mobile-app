import * as ActionTypes from './actionTypes';

export const beginApiCall = () => ({
  type: ActionTypes.BEGIN_API_CALL,
});

export const endApiCall = () => ({
  type: ActionTypes.END_API_CALL,
});
