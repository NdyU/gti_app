import { SEND_MESSAGE, RECEIVE_MESSAGE } from 'actions/message/types';

var initialState = {
  message_history: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      console.log('Finished: Sending Message');
      return state
      break;
    case RECEIVE_MESSAGE:
      console.log('Finished: Receive Message: ' + action.payload);
      var newMessageHistory = state.message_history;
      newMessageHistory.push(action.payload);
      return {...state, message_history: newMessageHistory};
      break;
    default:
    return state;
  }
}
