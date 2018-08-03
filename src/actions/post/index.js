import axios from 'axios';
import { GET_POST, GET_POST_LIST, CREATE_POST } from 'actions/post/types';

import { composeApiUrl } from 'actions/utils';

export default {
  createPost: (form_data) => async dispatch => {
    console.log('Creating Post');

    var user_id = form_data.user_id || 1;
    var title = form_data.title;
    var external_url = form_data.external_url;
    var file = form_data.image_file;
    var community_id = form_data.community_id;

    var formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('community_id', community_id);
    formData.append('title', title);
    formData.append('external_url', external_url);
    formData.append('file', file);



    var request_url = composeApiUrl(`/community/${community_id}/posts`);
    var request = await axios.post(request_url, formData);

    var response = request.data;

    if(response.success) {
      dispatch({type:CREATE_POST});
    }
  },
  getPost: (community_id, post_id) => async dispatch => {
    console.log('Getting Post');

    var request_url = composeApiUrl(`/community/${community_id}/posts/${post_id}`);
    var request = await axios.get(request_url);

    var response = request.data;

    if(response.success) {
      dispatch({type: GET_POST});
    }
  },
  getPostList: (community_id) => async dispatch => {

    console.log('Getting Post List');

    var request_url = composeApiUrl(`/community/${community_id}/posts`);
    var request = await axios.get(request_url);

    var response = request.data;

    if(response.success) {
      dispatch({type: GET_POST_LIST, payload: response.list})
    }
  }
}
