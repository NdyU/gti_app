import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from 'components/HomePage';
import Community from 'components/Community';
import Admin from 'components/Admin';
import Page_404 from 'components/Util/Page_404';
import populateUser from 'components/PopulateStates/populateUser';
import Login from 'components/Login';

import Nav from 'components/Nav';
import Footer from 'components/Footer';

import 'index.css';

// const login_point = process.env.REACT_APP_LOGIN_POINT || 'URL of server side auth'


class App extends Component {

  constructor(props) {
    super(props);

    console.log('App constructor');
  }
  componentWillMount = () => {
    console.log('App Will Mount');
  }

  componentDidMount = () => {
    console.log('App Did Mount');
  }

  componentWillUpdate = () => {
    console.log('App Will Update');
  }
  componentDidUpdate = () => {
    console.log('App Did Update');
  }

  render() {

    console.log('App rendered');
    var authorizedUser = this.props.user.auth_level == 1 ? true : false;
    console.log(this.props);
    console.log(authorizedUser);
    return (
      <Router>
        <div>
          <Nav />
          <Route path='/login/:token' component={Login}/>
          <Switch>
            <Route path='/' exact component={ HomePage }/>
            <Route path='/community/:community_name' component={ Community }/>
            { authorizedUser &&
              <Route path='/admin' component={ Admin }/>
            }
            <Route component={Page_404}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return ({user: state.user});
}
export default connect(mapStateToProps, null)(populateUser(App));
