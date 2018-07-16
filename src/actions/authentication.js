import { AUTH, GOOGLE_AUTH } from '../config/firebase';
import { FETCH_USER } from './action-constants';


export const fetchUser = () => (dispatch) => {
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
    .then(() => {})
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