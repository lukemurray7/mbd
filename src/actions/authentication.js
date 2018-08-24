import { AUTH, GOOGLE_AUTH } from '../config/firebase';
import { FETCH_USER, FETCH_USER_LOADING } from './action-constants';


export const fetchUser = () => (dispatch) => {
  dispatch({
    type: FETCH_USER_LOADING,
  });
  AUTH.onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user,
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null,
      });
    }
  });
};

export const signIn = () => () => {
  AUTH
    .signInWithPopup(GOOGLE_AUTH)
    .then((user) => {
      console.log('hello');
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOut = () => () => {
  AUTH
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
    });
};
