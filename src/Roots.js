import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import reducers from 'reducers';
import reduxThunk from 'redux-thunk';
import socketIOMW from 'middlewares/socketIOMW';

import socketIOClient from 'socket.io-client';

// Parameter style is ES6 destructing.
// props = {
//  childern: ....,
//  initialState: ....
// }

const serverDomain = process.env.REACT_APP_SERVER_DOMAIN;

export default ({ children, initialState = {} }) => {

  const store = createStore(
    reducers,
    initialState,
    // applyMiddleware(reduxPromise) //Handles async action creators that make network requests
    applyMiddleware(reduxThunk, socketIOMW(socketIOClient, serverDomain))
  );

  return (
    <Provider store={store}>
      { children }
    </Provider>
  );
};
