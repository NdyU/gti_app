import axios from 'axios';
import { SEND_MESSAGE, RECEIVE_MESSAGE } from 'actions/message/types';

import { composeApiUrl } from 'actions/utils';

export default {
  sendMessage: (message) => async dispatch => {
    console.log('Sending Message');
    console.log(message);
    dispatch({type: SEND_MESSAGE, payload: message});
  },
  receiveMessage: () => async dispatch => {

  }
}
