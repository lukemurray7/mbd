import { combineReducers } from 'redux';

import data from './get-data';
import auth from './auth-reducer';

export default combineReducers({
  data,
  auth,
});
