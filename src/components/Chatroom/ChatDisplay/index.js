import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';
import MessageDisplay from 'components/Chatroom/ChatDisplay/MessageDisplay';

import {
  ChatDisplayContainer,
  DisplayArea
} from 'components/Chatroom/ChatDisplay/styles';


class ChatDisplay extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount = () => {
    console.log('ChatDisplay Will Mount');
  }
  componentDidMount = () => {
    console.log('ChatDisplay Did Mount');
  }
  componentWillUpdate = () => {
    console.log('ChatDisplay Will Update');
  }
  componentDidUpdate = () => {
    console.log('ChatDisplay Did Update');
  }
  componentWillUnmount = () => {
    console.log('ChatDisplay Will Umount');
    clearInterval(this.state.updateUserInterval);
  }

  renderMessageList = () => {
    return this.props.message.message_history.map((message, index) => {
      console.log(message);
      return <MessageDisplay key={ index } user={message.user} message={message.message}></MessageDisplay>;
    });
  }

  render() {
    console.log('ChatDisplay Rendered');

    return (
      <ChatDisplayContainer>
        <DisplayArea>
          {this.renderMessageList()}
        </DisplayArea>
      </ChatDisplayContainer>
    )
  }
}

function mapStateToProps(state) {
  return ({message: state.message, user: state.user});
}

export default connect(mapStateToProps, actions.community)(ChatDisplay);
