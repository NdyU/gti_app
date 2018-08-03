import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

class UserList extends Component {

  constructor(props) {
    super(props);

    console.log('UserList constructor');

    var updateUser = setInterval(() => {
      console.log('Setting Interval every 5 mins to fetch user list');
      this.props.GET_ONLINE_USERS(this.props.community_id);
    }, 5*60*1000);

    this.state = {
      updateUserInterval: updateUser
    }

    this.props.GET_ONLINE_USERS(this.props.community_id);
  }

  componentWillMount = () => {
    console.log('UserList Will Mount');
  }
  componentDidMount = () => {
    console.log('UserList Did Mount');
  }
  componentWillUpdate = () => {
    console.log('UserList Will Update');
  }
  componentDidUpdate = () => {
    console.log('UserList Did Update');
  }
  componentWillUnmount = () => {
    console.log('UserList Will Umount');
    clearInterval(this.state.updateUserInterval);
  }

  renderCommunityList = () => {
    var OnlineUsersDOM = [];

    for(var user_id in this.props.onlineUsers) {
      if(this.props.onlineUsers.hasOwnProperty(user_id)) {
        OnlineUsersDOM.push(
          <div key={user_id}>{ this.props.onlineUsers[user_id].displayName }</div>
        );
      }
    }
    return OnlineUsersDOM;
  }

  render() {
    console.log('UserList Rendered');

    return (
      <div>
        Online Users:
        {this.renderCommunityList() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({onlineUsers: state.community.currentCommunity.onlineUsers});
}

export default connect(mapStateToProps, actions.community)(UserList);
