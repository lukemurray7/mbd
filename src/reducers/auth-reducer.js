import { FETCH_USER } from '../actions/action-constants';

export default (state = false, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || null;
    default:
      return state;
  }
};
