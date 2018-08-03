import React, { Component } from 'react';

import {
  UserWidgetContainer,
  AvatarContainer,
  Avatar,
  DisplayName,
  InlineFlexContainer
} from 'components/Nav/UserWidget/styles';

class UserWidget extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props.user);
    const avatar_url = this.props.user.avatar_url;
    const displayName = this.props.user.displayName;
    return(
      <UserWidgetContainer>
        <InlineFlexContainer>
          <AvatarContainer>
            <Avatar src={avatar_url}/>
          </AvatarContainer>
          <DisplayName>
            {displayName}
          </DisplayName>
        </InlineFlexContainer>
      </UserWidgetContainer>
    );
  }
}

export default UserWidget;
