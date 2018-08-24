import { FETCH_USER, FETCH_USER_LOADING } from '../actions/action-constants';

const initialState = {
  user: null,
  loading: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
