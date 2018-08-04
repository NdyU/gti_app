import { combineReducers } from 'redux';
import communityReducer from 'reducers/community';
import userReducer from 'reducers/user';
import postReducer from 'reducers/post';
import messageReducer from 'reducers/message';
import commentReducer from 'reducers/comment';

export default combineReducers({
  user: userReducer,
  community: communityReducer,
  post: postReducer,
  message: messageReducer,
  comment: commentReducer,
});
