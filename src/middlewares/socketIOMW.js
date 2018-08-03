import socketIOClient from 'socket.io-client';
import {SEND_MESSAGE, RECEIVE_MESSAGE } from 'actions/message/types';
import {JOIN_COMMUNITY} from 'actions/community/types';

const middleware = (socket, serverDomain) => store => {


  const ChatNameSpace = socket(`${serverDomain}/chat`);

  //Receiving Message from the server
  ChatNameSpace.on('message', (message) => {
    console.log('Processing Received Message: ')
    console.log(message);
    store.dispatch({type: RECEIVE_MESSAGE, payload: message});
  });

  return next => action => {
    switch (action.type) {
      case JOIN_COMMUNITY:
        //Sent a request to server for socket to join the community
        ChatNameSpace.emit('join', action.payload);
        next(action);
        break;
      case SEND_MESSAGE:
        //Get the current state from the redux store
        const state = store.getState();
        const user = state.user;
        const community = state.community.currentCommunity.community_id;
        var message = {
          message: action.payload,
          user: user,
          community: community,
        }
        //Sent message to all users that is in the community
        ChatNameSpace.emit('message', message);
        next(action);
        break;
      default:
        next(action);
    }
  }
}

export default middleware;
