import {
  FETCH_DATA,
} from '../actions/action-constants';

const initialState = {
  data: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        data: action.data,
      };
    default:
      return state;
  }
};

export default dataReducer;
