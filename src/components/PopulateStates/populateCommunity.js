import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

export default(ChildComponent) => {

  class CommunityComponent extends Component {

    componentDidMount() {

      // Check if the user have a token assigned
      this.props.GET_LIST();

    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  function mapStatesToProps(state) {
    return {community_list: state.community_list };
  }

  return connect(mapStatesToProps, actions.community)(CommunityComponent);
};
