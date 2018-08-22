import { FETCH_USER } from '../actions/action-constants';

const initialState = {
  user: null,
  loading: null,
}

export default (state = false, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || null;
    default:
      return state;
  }
};
