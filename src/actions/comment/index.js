import axios from 'axios';
import { CREATE_COMMENT, DELETE_COMMENT, GET_COMMENT_LIST } from 'actions/comment/types';

import { composeApiUrl } from 'actions/utils';

export default {
  createComment: ({community_id, post_id, comment, user_id, username}) => async dispatch => {

    console.log('Creating Comment');

    //formData by default is multipart/form
    var formData = new FormData();
    formData.append('comment', comment);
    formData.append('user_id', user_id);
    formData.append('username', username);

    var request_url = composeApiUrl(`/community/${community_id}/posts/${post_id}/comments`);
    var request = await axios.post(request_url, formData);

    var response = request.data;

    if(response.success) {
      dispatch({type: CREATE_COMMENT});
    }
  },
  deleteComment: (community_id, post_id, comment_id) => async dispatch => {
    console.log('Deleting Comment')

    var request_url = composeApiUrl(`/community/${community_id}/post/${post_id}/comments/${comment_id}`);
    //Fires an DELETE Http Method
    var request = await axios.delete(request_url);

    var response = request.data;

    if(response.success) {
      dispatch({type: DELETE_COMMENT});
    }
  },
  getCommentList: (community_id, post_id) => async dispatch => {
    console.log('Getting Comment List');

    var request_url = composeApiUrl(`/community/${community_id}/posts/${post_id}/comments`);
    var request = await axios.get(request_url);

    var response = request.data;

    if(response.success) {
      dispatch({type: GET_COMMENT_LIST, payload: response.list});
    }
  }
}
