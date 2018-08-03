import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  MessageDisplayContainer,
  MessageDisplayBox,
  MessageBoxContainer,
  MessageBox,
  UserAvatar,
  UserAvatarContainer,
  UserDisplayName,

} from 'components/Chatroom/ChatDisplay/MessageDisplay/styles';

class MessageDisplay extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const message = this.props.message;
    return(
      <MessageDisplayContainer>
        <MessageDisplayBox>
          <UserAvatarContainer>
            <UserAvatar src={this.props.user.avatar_url}/>
          </UserAvatarContainer>
          <MessageBoxContainer>
            <UserDisplayName>{this.props.user.displayName}</UserDisplayName>
            <MessageBox>{ message }</MessageBox>
          </MessageBoxContainer>
        </MessageDisplayBox>
      </MessageDisplayContainer>
    );
  }
}

export default MessageDisplay
