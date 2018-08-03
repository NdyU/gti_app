import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

export default(ChildComponent) => {

  class UserComponent extends Component {

    constructor(props) {
      super(props);

      console.log("populateUserState constructor");
      this.props.GET();
    }
    componentWillMount = () => {
      console.log('populateUserState Will Mount');
    }

    componentDidMount = () => {
      console.log('populateUserState Did Mount');
    }

    componentWillUpdate = () => {
      console.log('populateUserState Will Update');
    }
    componentDidUpdate = () => {
      console.log('populateUserState Did Update');
    }

    render() {
      console.log('populateUserState rendered');

      return <ChildComponent {...this.props} />
    }
  }

  return connect(null, actions.user)(UserComponent);
};
