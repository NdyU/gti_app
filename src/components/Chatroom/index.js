import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

import UserList from 'components/Chatroom/UserList';
import Chatbox from 'components/Chatroom/Chatbox';
import ChatDisplay from 'components/Chatroom/ChatDisplay';

import {
  ChatroomContainer,
  ChatDisplayContainer,
  ChatboxContainer,
  UserListContainer,
  ChatroomHeaderContainer,
  ChatroomContentContainer,
  UserListWidget,
} from 'components/Chatroom/styles';

class Chatroom extends Component {

  constructor(props) {
    super(props);

    console.log('Chatroom constructor');


    var updateUser = setInterval(() => {
      console.log('Setting Interval every 5 mins to fetch user list');
      this.props.GET_ONLINE_USERS(this.props.community_id);
    }, 5*60*1000);

    this.state = {
      showUserList: false,
      updateUserInterval: updateUser,
      userCount: 0
    }

    this.props.GET_ONLINE_USERS(this.props.community_id);

    this.hideUserListPanel = this.hideUserListPanel.bind(this);
  }

  componentWillMount = () => {
    console.log('Chatroom Will Mount');
  }
  componentDidMount = () => {
    console.log('Chatroom Did Mount');
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps);
    return null;
  }
  componentWillUpdate = () => {
    console.log('Chatroom Will Update');
    console.log(this.props.onlineUsers);
      // this.setState({...this.state, userCount: this.props.onlineUsers});
  }
  componentDidUpdate = () => {
    console.log('Chatroom Did Update');
  }
  //
  // renderUserListPanel = () => {
  //   return <UserList community_id={this.props.community_id} hidePanel={ this.hideUserListPanel} onlineUsers={this.props.onlineUsers}/>
  // }

  showUserListPanel = () => {
    this.setState({showUserList: true});
  }

  hideUserListPanel = () => {
    this.setState({showUserList: false})
  }
  render() {

    console.log('Chatroom rendered');
    return (
      <ChatroomContainer>
        {/* <UserListContainer>
          <UserList community_id={this.props.community_id}/>
        </UserListContainer> */}
        <ChatroomHeaderContainer>
          Fornite
        </ChatroomHeaderContainer>
        <ChatroomContentContainer>
          <ChatDisplayContainer>
              <ChatDisplay community_id={this.props.community_id}/>
          </ChatDisplayContainer>
          <ChatboxContainer>
            <Chatbox />
          </ChatboxContainer>
        </ChatroomContentContainer>

        {/* {this.state.showUserList ? (
          this.renderUserListPanel()
        ) : (
          <UserListWidget onClick={ this.showUserListPanel }>Users: {this.state.userCount}</UserListWidget>
        )} */}

      </ChatroomContainer>
    )
  }
}

function mapStateToProps(state) {
  return ({onlineUsers: state.community.currentCommunity.onlineUsers});
}

export default connect(mapStateToProps, actions.community)(Chatroom);
