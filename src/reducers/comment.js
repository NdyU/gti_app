import { CREATE_COMMENT, DELETE_COMMENT, GET_COMMENT_LIST } from 'actions/comment/types';

const initialState = {
  list: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      console.log('Finished: Creating Comment');
      return state;
      break;
    case DELETE_COMMENT:
      console.log('Finished: Deleting Comment');
      return state;
      break;
    case GET_COMMENT_LIST:
      console.log('Finished: Getting Comment List');
      return {...state, list: action.payload};
      break;
    default:
    return state;
  }
}
