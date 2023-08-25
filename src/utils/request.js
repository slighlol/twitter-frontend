/* eslint-disable linebreak-style */
import { Toast } from 'antd-mobile';
import axios from 'axios';

const domain = 'http://localhost:3334';

// interpect request: handle data, add domain
axios.interceptors.request.use((config) => ({
  ...config,
  url: domain + config.url,
}));

// intercept response: handle data, handle error
axios.interceptors.response.use((response) => response.data, () => {
  Toast.show('Server Failure');
});

export const get = (url) => axios.get(url);

export const post = (url, params) => axios.post(url, params);

export const put = (url, params) => axios.put(url, params);

export const del = (url, params) => axios.del(url, params);
