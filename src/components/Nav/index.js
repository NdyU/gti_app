import React, { Component } from 'react';
import {connect} from 'react-redux';

import UserWidget from 'components/Nav/UserWidget';

import {
  NavContainer,
  NavSecondContainer,
  LogoContainer,
  LoginInfoContainer,
  LogoLink
} from 'components/Nav/styles';

class Nav extends Component {
  constructor(props) {
    super(props);

  }

  renderLogin = () => {
    return(
      <div>
        <a href='http://localhost:3001/login'>Login</a>
      </div>
    )
  }
  
  renderUserInfo = () => {
    if(this.props.user.authenticated) {
      var user = this.props.user;

      return (
          <UserWidget user={user}/>
      )
    } else {
      return this.renderLogin();
    }
  }

  render() {
    return (
      <NavContainer>
        <NavSecondContainer>
          <LogoContainer>
            <LogoLink href='/'>
              GTI
            </LogoLink>
          </LogoContainer>
          <LoginInfoContainer>
            { this.renderUserInfo() }
          </LoginInfoContainer>
        </NavSecondContainer>
      </NavContainer>
    )
  }
}

function mapStatesToProps(state) {
  return ({user: state.user});
}

export default connect(mapStatesToProps, null)(Nav);
