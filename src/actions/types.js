import communityTypes from 'actions/community/types';

export const community = communityTypes;

export const CHECK_AUTH = 'check if the user is authorized';
export const GET_POSTS = 'retrieve all the post from the database';
export const FETCH_POST_COMMENTS = 'retrieve all the comments related to that post';
export const GET_COMMUNITIES = 'retrieve all the communities from the database';
export const UPDATE_ONLINE_USERS = 'retrieve all online users from a certain community';
export const SIGN_IN = 'user_sign_in';
export const SIGN_OUT = 'user_sign_out';
export const ADD_USER_TO_COMMUNITY = 'adding user to community';
export const CREATE_COMMUNITY = 'create a new community';
