import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { connect } from 'react-redux';
import actions from 'actions';

import CreatePostForm from 'components/Forms/Post/create';
// import DeletePostForm from 'components/Forms/Post/delete';

class Post extends Component {

  componentDidMount = () => {
    this.props.GET_LIST();
  }
  render() {
    return (
      <Router>
        <div>
          <Link to='/admin/post/create'>Create Post</Link>
          <Link to='/admin/post/delete'>Delete Post</Link>
          <Route path='/admin/post/create' component={ CreatePostForm } community_list={this.props.communtiy_list}/>
          {/* <Route path='/admin/community/delete' component={ DeletePostForm }/> */}
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return ({community_list: state.community.list})
}
export default connect(mapStateToProps, actions.community)(Post);
