import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

import populateUser from 'components/PopulateStates/populateUser';

import PostThumbnail from 'components/Post/PostThumbnail';

import {
  PostContainer,
  PostContainerHeader,
} from 'components/Post/styles';

class Post extends Component {

  constructor(props) {
    super(props);

    console.log("Post constructor");
  }

  componentWillMount = () => {
    console.log('Post Will Mount');
  }

  componentDidMount = () => {
    console.log('Post Did Mount');
    this.props.GET_LIST(this.props.community_name)
  }

  componentWillUpdate = () => {
    console.log('Post Will Update');
  }
  componentDidUpdate = () => {
    console.log('Post Did Update');
  }

  renderPostList = () => {

    var PostListDOM = [];
    for(var post_id in this.props.post_list) {
      if(this.props.post_list.hasOwnProperty(post_id)) {
        PostListDOM.push(
          <PostThumbnail community_id={this.props.currentCommunity.community_id} post_id={post_id} key={post_id} post={this.props.post_list[post_id]}/>
        );
      }
    }
    return PostListDOM;
  }

  render() {

    console.log('Post rendered');
    return (
      <PostContainer>
        <PostContainerHeader>
          Trending Now:
        </PostContainerHeader>

        {this.renderPostList()}
      </PostContainer>
    )
  }
}

function mapStateToProps(state) {
  return ({post_list: state.post.list, currentCommunity: state.community.currentCommunity});
}
export default connect(mapStateToProps, actions.post)(Post);
