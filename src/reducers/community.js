import { CREATE_COMMUNITY, DELETE_COMMUNITY, GET_COMMUNITY_LIST, JOIN_COMMUNITY, GET_ONLINE_USERS} from 'actions/community/types';

const initialState = {
  currentCommunity: {},
  list: {},
}


export default function( state = initialState, action) {
  switch (action.type) {
    case CREATE_COMMUNITY:
      console.log('Finished: Creating Community');
      return state
      break;
    case GET_COMMUNITY_LIST:
      console.log('Finished: Getting Community List');
      return {...state, list: action.payload};
      break;
    case DELETE_COMMUNITY:
      console.log('Finished: Deleting Community');
      return state;
      break;
    case JOIN_COMMUNITY:
      console.log('Finished: Joining Community');
      return {...state, currentCommunity: {...state.currentCommunity, community_id: action.payload.community_id}};
      break;
    case GET_ONLINE_USERS:
      console.log('Finished: Getting Users In The Community');
      var community = state.currentCommunity;
      community = {...community, onlineUsers: action.payload.list};
      console.log(community);
      return {...state, currentCommunity: community};
      break;
    default:
      return state;
  }
}
