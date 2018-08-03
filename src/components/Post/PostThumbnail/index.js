import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions';

import CommentsModal from 'components/Post/PostThumbnail/CommentsModal';

import {
  PostThumbnailContainer,
  ThumbnailHeader,
  ThumbnailImageContainer,
  ThumbnailImage,
  ThumbnailFooter,
  GotoLink,
  ModalBackground
} from 'components/Post/PostThumbnail/styles';

class PostThumbnail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    }

    this.closeCommentsModal = this.closeCommentsModal.bind(this);
  }

  displayCommentsModal = () => {
    console.log(this.props);
    this.props.GET_COMMENT_LIST(this.props.community_id, this.props.post_id);
    this.setState({showModal: true});
  }

  closeCommentsModal = () => {
    this.setState({showModal: false});
  }

  renderCommentsModal = () => {
    return this.state.showModal?<ModalBackground><CommentsModal post={this.props.post} closeCommentsModal={this.closeCommentsModal} /></ModalBackground>: null;
  }

  render() {

    var external_link = this.props.post.external_link;
    var image_url = this.props.post.imageName;
    var title = this.props.post.title;
    var post_id = this.props.post_id;
    var community_id = this.props.community_id;

    return (
      <PostThumbnailContainer id={post_id}>
        <ThumbnailHeader>
          { title }
        </ThumbnailHeader>

        <ThumbnailImageContainer onClick={ this.displayCommentsModal }>
          <ThumbnailImage src={image_url}/>
        </ThumbnailImageContainer>

        <ThumbnailFooter>
          <GotoLink href={external_link} target='__blank'>Goto</GotoLink>
        </ThumbnailFooter>

        { this.renderCommentsModal() }
      </PostThumbnailContainer>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    GET_COMMENT_LIST: bindActionCreators(actions.comment.GET_LIST, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(PostThumbnail);
