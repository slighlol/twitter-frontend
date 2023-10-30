import { get, post, put } from '@utils/request';

/**
 * user related apis
 * @param {*} userId
 * @param {*} params
 */
export const editUser = (userId, params) => put(`/api/profiles/${userId}`, params);

// follow a user
export const followUser = (userId) => post(`/api/friendships/${userId}/follow`);

// unfollow a user
export const unFollowUser = (userId) => post(`/api/friendships/${userId}/unfollow`);

// get a list of a user's followers
export const getFollowers = (userId) => get(`/api/friendships/${userId}/followers`);

// get a list of a user's followings
export const getFollowings = (userId) => get(`/api/friendships/${userId}/followings`);