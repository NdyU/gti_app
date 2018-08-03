import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from 'actions';

import {
  CommentsModalContainer,
  CommentsModalHeader,
  ModalHeaderImage,
  ModalHeaderText,
  ModalContent,
  CommentContainer,
  Comment,
  CommentFooter,
  CommentUser,
  ModalFooter,
  CloseButton
} from 'components/Post/PostThumbnail/CommentsModal/styles';

class CommentsModal extends Component {
  constructor(props) {
    super(props);

  }

  renderCommentList = () => {

    var CommentListDOM = [];
    for(var comment_id in this.props.comment_list) {
      if(this.props.comment_list.hasOwnProperty(comment_id)) {
        var comment_list = this.props.comment_list;
        var date = new Date(1970, 0, 1);
        date.setSeconds(comment_list[comment_id].created.seconds);
        console.log(date);

        date = '' + date;
        var dateAry = date.split(' ');
        console.log(dateAry);
        date = dateAry[1] + ' ' + dateAry[2] + ' ' + dateAry[3] + ' ' + dateAry[4];


        CommentListDOM.push(
          <CommentContainer key={comment_id}>
            <Comment >{comment_list[comment_id].comment}</Comment>
            <CommentFooter>
              <CommentUser>
                On {'' + date} by {comment_list[comment_id].username}
              </CommentUser>
            </CommentFooter>
          </CommentContainer>
        );
      }
    }
    return CommentListDOM;
  }


  render() {

    const title = this.props.post.title;
    const img_url = this.props.post.imageName;

    console.log(this.props.comment_list);

    return(
      <CommentsModalContainer>
        <CommentsModalHeader>
          <ModalHeaderImage src={img_url}/>
          <ModalHeaderText>{title}</ModalHeaderText>
        </CommentsModalHeader>
        <ModalContent>
          { this.renderCommentList() }
        </ModalContent>
        <ModalFooter>
          <CloseButton onClick={this.props.closeCommentsModal}>Close</CloseButton>
        </ModalFooter>
      </CommentsModalContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    GET_COMMENT_LIST: bindActionCreators(actions.comment.GET_LIST, dispatch),
  }
}

function mapStateToProps(state) {
  return ({comment_list: state.comment.list});
}


export default connect(mapStateToProps, null)(CommentsModal);
