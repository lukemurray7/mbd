import { DB } from '../config/firebase';
import { FETCH_DATA } from './action-constants';

const fetchData = () => (dispatch) => {
  DB.collection('bets').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
    dispatch({
      type: FETCH_DATA,
      data: querySnapshot,
    });
  });
};

export default fetchData;
