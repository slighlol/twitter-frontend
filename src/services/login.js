import { get, post } from '../utils/request';

export const login = (username, password) => get(`/api/login/${username}/${password}`);

export const register = (username, password) => post(`/api/user/${username}/${password}`);

// get user info
export const getUser = (id) => get(`/api/user/${id}`);