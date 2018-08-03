import { GET_USER } from 'actions/user/types';

const initialState = {
  authenticated: false,
  user: {
  },
  errorMessage: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      console.log('Finished: Getting User');
      return {...state, ...action.payload.user, authenticated: action.payload.authenticated, };
      break;
    default:
      return state;
  }
}
