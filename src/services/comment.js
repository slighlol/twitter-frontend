import { post } from '../utils/request';

// create comment
export const createComment = (params) => post('/api/comments', params);

// give like
export const likes = (params) => post('/api/likes', params);

// cancel like
export const cancelLike = (params) => post('/api/likes/cancel', params);
