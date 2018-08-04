import axios from 'axios';
import { CREATE_COMMUNITY, DELETE_COMMUNITY, GET_COMMUNITY_LIST, JOIN_COMMUNITY, GET_ONLINE_USERS} from 'actions/community/types';

import { composeApiUrl } from 'actions/utils';

export default {
  createCommunity: (form_data) => async dispatch => {
    console.log('Creating Community');

    const formData = new FormData();
    formData.append('community_name', form_data.community_name);
    formData.append('file', form_data.img_file);

    var request_url = composeApiUrl(`/community`);
    var request = await axios.post(request_url, formData);

    var response = request.data;

    if(response.success) {
      dispatch({type: CREATE_COMMUNITY});
    }
  },
  getCommunity: (form_data) => async dispatch => {

  },
  getCommunityList: (form_data) => async dispatch => {
    console.log('Getting Community List');

    var request_url = composeApiUrl('/community');
    var request = await axios.get(request_url);

    var response = request.data;

    if(response.success) {
      dispatch({type: GET_COMMUNITY_LIST, payload: response.list});
    }
  },
  deleteCommunity: (form_data) => async dispatch => {
    console.log('Deleting Community');

    var request_url = composeApiUrl(`/community/${form_data.community_id}`);
    var request = await axios.delete(request_url);

    var response = request.data;

    if(response.success) {
      dispatch({type: DELETE_COMMUNITY});
    }
  },
  joinCommunity: (community_id, user_id) => async dispatch => {
    console.log('Joining Community');

    var request_url = composeApiUrl(`/community/${community_id}/users/${user_id}`);
    var request = await axios.post(request_url);

    var response = request.data;

    var pack = {
      community_id: community_id,
      user_id: user_id
    }
    if(response.success) {
      dispatch({type: JOIN_COMMUNITY, payload: pack});
    }
  },
  getOnlineUsers: (community_id) => async dispatch => {
    console.log('Getting Users In The Community');

    var request_url = composeApiUrl(`/community/${community_id}/users`);
    var request = await axios.get(request_url);

    var response = request.data;

    if(response.success) {
      dispatch({type: GET_ONLINE_USERS, payload: response});
    }
  }
}
