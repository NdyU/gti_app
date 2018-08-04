import axios from 'axios';
import { GET_USER } from 'actions/user/types';

const ServerDomain = process.env.REACT_APP_SERVER_DOMAIN;

export default {
  login: (token) => async dispatch => {

  },
  getUser: () => async dispatch => {
    console.log('Getting User');

    var request, response;

    var request_url = `${ServerDomain}/getUser`;
    request = await axios.get(request_url, {withCredentials: true});

    console.log("Authorization status from API");

    response = request.data;

    var payload = {
      authenticated: false,
      user: {
        displayName: '',
        avatar_url: ''
      }
    }

    if(response.success) {
      payload.authenticated = true;

      payload.user = response.user;
    };

    dispatch({type:GET_USER, payload: payload});
  }
}
