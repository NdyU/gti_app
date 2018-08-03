import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from 'actions';

import {
  ChatboxContainer,
  ChatboxInput,
  ChatboxSubmit,
  MentionContainer,
  Mention
} from 'components/Chatroom/Chatbox/styles';

class Chatbox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      comment: {
        post_id: '',
        exist: false,
        text: '',
        positionIndex: 0
      },
      triggerPostList: false,
      holdShift: false,

      user: {
        google_id: this.props.user.google_id,
        displayName: this.props.user.displayName
      }
    };

    this.submit = this.submit.bind(this);
    this.mentionChange = this.mentionChange.bind(this);
  }

  renderPostList = () => {
    if(!this.state.triggerPostList) {
      return;
    }

    var postList = [];

    for(var post_id in this.props.post_list) {
      if(this.props.post_list.hasOwnProperty(post_id)) {
        postList.push(
          <Mention id={post_id} key={post_id} onClick={this.mentionChange}>
            {'@' +this.props.post_list[post_id].title}
          </Mention>
        );
      }
    }
    console.log(postList);
    return <MentionContainer>{postList}</MentionContainer>;
  }

  mentionChange = (event) => {
    console.log(event.currentTarget.textContent);
    console.log(event.target.getAttribute('id'));
    var newMessage = event.currentTarget.textContent + ' ';
    var mention_id = event.target.getAttribute('id')
    var length = newMessage.length - 1;
    this.setState({...this.state, message: newMessage, triggerPostList: false, comment: {...this.state.comment, post_id: mention_id, exist: true, positionIndex: length}});
  }

  messageChange = (event) => {
    console.log(this.state);
    var message = event.target.value;
    var options = {
      comment: this.state.comment
    };
    if(message.length == 1 && message[0] == '@') {
      console.log('Commenting');
      options.triggerPostList = true;
    } else if(message.length <= this.state.comment.positionIndex) {
      console.log('Decommented');
      options.triggerPostList = false;
      options.comment.positionIndex = 0;
      options.comment.exist = false;
      message = '';
    } else if(this.state.comment.exist) {
      var comment = message.substring(this.state.comment.positionIndex, message.length);
      options.comment.text = comment;
    }

    this.setState({...options, message: message});
  }

  handleKeyPress = (event) => {

    if(event.repeat) {
      console.log('Repeatly holding key');
    }

    switch (event.key) {
      case 'Enter':
        if(event.shiftKey) {  //Produce a new line when shift key is hold
          console.log("Should produce a new line in the input box");
        } else {
          this.submit();
        }
        break;
      default:
    }
  }

  submit = () => {
    if(this.state.message.length <= 0 || (this.state.message.length == 1 && this.state.message[0] == '@')) return;

    this.props.SEND_MESSAGE(this.state.message);

    var formData = {
      post_id: this.state.comment.post_id,
      community_id: this.props.currentCommunity.community_id,
      comment: this.state.comment.text,
      user_id: this.props.user.google_id,
      username: this.props.user.displayName
    }

    if(this.state.comment.exist) {
      this.props.CREATE_COMMENT(formData);
    }

    this.setState({...this.state, triggerPostList: false, message: ''});
  }

  render() {
    console.log(this.props);

    return(
      <ChatboxContainer>
        { this.renderPostList() }
        <ChatboxInput type='text' onKeyPress={ this.handleKeyPress } onChange={ this.messageChange} value={this.state.message}/>
        <ChatboxSubmit onClick={ this.submit }>Send</ChatboxSubmit>
      </ChatboxContainer>
    )
  }
}

function mapStatesToProps(state) {
  return {post_list: state.post.list, currentCommunity: state.community.currentCommunity, user: state.user}
}

function mapDispatchToProps(dispatch) {
  return {
    SEND_MESSAGE: bindActionCreators(actions.message.SEND, dispatch),
    CREATE_COMMENT: bindActionCreators(actions.comment.CREATE, dispatch),
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Chatbox);
