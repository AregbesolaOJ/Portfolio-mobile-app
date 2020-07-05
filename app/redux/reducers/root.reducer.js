import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import inProgressReducer from './inProgress.reducer';

export default combineReducers({
  auth: authReducer,
  inProgress: inProgressReducer,
});
