import community from 'actions/community';
import user from 'actions/user';
import post from 'actions/post';
import message from 'actions/message';
import comment from 'actions/comment';

export default {
  SERVER: {
    IS_ONLINE: ''
  },
  community: {
    CREATE: community.createCommunity,
    GET: community.getCommunity,
    GET_LIST: community.getCommunityList,
    DELETE: community.deleteCommunity,
    JOIN: community.joinCommunity,
    GET_ONLINE_USERS: community.getOnlineUsers,
  },
  user: {
    GET: user.getUser,
    LOGIN: user.login,
  },
  post: {
    CREATE: post.createPost,
    GET: post.getPost,
    GET_LIST: post.getPostList,
    DELETE: post.deletePost,
  },
  message: {
    SEND: message.sendMessage,
    RECEIVE: message.receiveMessage
  },
  comment: {
    CREATE: comment.createComment,
    GET_LIST: comment.getCommentList,
    DELETE: comment.deleteComment
  }
}
