import { get } from '../utils/request';

export const loginService = (username, password) => get(`/api/login/${username}/${password}`);

export const register = (username, password) => register(`/api/user/${username}/${password}`);
