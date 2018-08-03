import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import AdminCommunity from 'components/Admin/Community';
import AdminPost from 'components/Admin/Post';

class Admin extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to='/admin/community'>Community</Link>
            <Link to='/admin/post'>Post</Link>
            <Route path='/admin/community' component={ AdminCommunity }/>
            <Route path='/admin/post' component={ AdminPost }/>
          </div>
        </Router>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({user: state.user})
}
export default connect(mapStateToProps, null)(Admin);
