/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import { post } from '@utils/request';

export const registerUser = (params) => {
  return post('/api/accounts/signup', params);
};