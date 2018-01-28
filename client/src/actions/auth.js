import axios from 'axios';

import { UPDATE_USER } from './types';

export const updateUser = ({ data }) => ({
  type: UPDATE_USER,
  payload: data
});

export const fetchUser = () => async dispatch => {
  const user = await axios.get('/auth/user');
  dispatch(updateUser(user));
};

export const handleToken = token => async dispatch => {
  const user = await axios.post('/api/stripe', token);
  dispatch(updateUser(user));
};
