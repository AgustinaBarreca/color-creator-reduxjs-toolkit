import { toggleLoading } from '../actions';
import { colorActions, uiActions } from '../slices';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';

export const requestDataColor = () => (dispatch) => {
  const starCountRef = ref(database);
  dispatch(uiActions.toggleLoading());
  onValue(starCountRef, (snapshot) => {
    setTimeout(() => {
      const data = snapshot.val();
      console.log(data, 'data');
      if (!data || !data.length) return;
      dispatch(colorActions.loadColors(data));
      dispatch(uiActions.toggleLoading());
    }, 5000);
  });
};
