import { CREATE_POST, DELETE_POST, GET_POST_LIST, GET_POST} from 'actions/post/types';

const initialState = {
  list: []
}


export default function( state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      console.log('Finished: Creating Post');
      return state;
      break;
    case GET_POST_LIST:
      console.log('Finished: Getting Post List');
      return {...state, list: action.payload};
      break;
    default:
      return state;
  }
}
