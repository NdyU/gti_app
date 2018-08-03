import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

import populateUser from 'components/PopulateStates/populateUser';

import Post from 'components/Post';
import Chatroom from 'components/Chatroom';


import {
  CommunityContainer,
  CommunityBox,
  PostContainer,
  ChatroomContainer,
  InlineFlexBox,
} from 'components/Community/styles';

class Community extends Component {

  constructor(props) {
    super(props);

    this.state = {
      community_name: this.props.match.params.community_name,
      showUserList: false,
    }

    console.log('Community constructor');

  }

  componentWillMount = () => {
    console.log('Community Will Mount');
  }
  componentDidMount = () => {
    console.log('Community Did Mount');
  }

  componentWillUpdate = () => {
    console.log('Community Will Update');
  }
  componentDidUpdate = () => {
    console.log('Community Did Update');
    this.props.JOIN(this.state.community_name, this.props.user.google_id);
  }

  render() {

    console.log('Community rendered');

    return (
      <CommunityContainer>
        <CommunityBox>
          <InlineFlexBox>
            <PostContainer>
              <Post community_name={this.state.community_name}/>
            </PostContainer>
            <ChatroomContainer>
              <Chatroom community_id={this.state.community_name}/>
            </ChatroomContainer>
          </InlineFlexBox>
        </CommunityBox>
      </CommunityContainer>
    )
  }
}

function mapStateToProps(state) {
  return ({user: state.user});
}
export default connect(mapStateToProps, actions.community)(Community);
