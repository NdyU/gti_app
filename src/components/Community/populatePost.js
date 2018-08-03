import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

export default(ChildComponent) => {

  class AuthComponent extends Component {

    componentWillMount() {

      // Check if the user have a token assigned
      this.props.GET_LIST();

    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  function mapStatesToProps(state) {
    return {user: state.user };
  }

  return connect(mapStatesToProps, actions.post)(AuthComponent);
};
