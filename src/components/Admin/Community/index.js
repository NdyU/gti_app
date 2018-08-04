import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import CreateCommunityForm from 'components/Forms/Community/create';
import DeleteCommunityForm from 'components/Forms/Community/delete';

class Community extends Component {

  render() {
    return (
      <Router>
        <div>
          <Link to='/admin/community/create'>Create Community</Link>
          <Link to='/admin/community/delete'>Delete Community</Link>
          <Route path='/admin/community/create' component={ CreateCommunityForm }/>
          <Route path='/admin/community/delete' component={ DeleteCommunityForm }/>
        </div>
      </Router>
    )
  }
}

export default Community;
