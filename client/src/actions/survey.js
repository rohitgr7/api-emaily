import axios from 'axios';

import { updateUser } from './auth';

export const submitSurvey = (values, history) => async dispatch => {
  const user = await axios.post('/user/surveys', values);
  history.push('/surveys');
  dispatch(updateUser(user));
};
