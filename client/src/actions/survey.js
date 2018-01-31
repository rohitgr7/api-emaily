import axios from 'axios';

import { updateUser } from './auth';
import { FETCH_SURVEYS } from './types';

export const submitSurvey = (values, history) => async dispatch => {
  const user = await axios.post('/user/surveys', values);
  history.push('/surveys');
  dispatch(updateUser(user));
};

export const fetchSurveys = () => async dispatch => {
  const { data } = await axios.get('/user/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: data });
};
