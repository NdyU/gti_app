import React, { Component } from 'react';
import 'components/HomePage/Gamethumbnail/Gamethumbnail.css';
import { connect } from 'react-redux';

import {
  ThumbnailContainer,
  ThumbnailHeader,
  ThumbnailImageContainer,
  ThumbnailImage,
  ThumbnailFooterContainer,
  ThumbnailFooter,
  CommunityButton,
  CommunityLink
} from 'components/HomePage/Gamethumbnail/styles';

class Gamethumbnail extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const displayName = this.props.community.displayName;
    const imageName = this.props.community.imageName;
    const refUrl = '/community/' + this.props.community_id;
    return (
      <ThumbnailContainer>
        <ThumbnailHeader>
          { displayName }
        </ThumbnailHeader>

        <ThumbnailImageContainer>
          <ThumbnailImage src={imageName}/>
        </ThumbnailImageContainer>


        <ThumbnailFooterContainer>
          <ThumbnailFooter>
            <CommunityLink href={refUrl}>
              <CommunityButton>View Community</CommunityButton>
            </CommunityLink>
          </ThumbnailFooter>
        </ThumbnailFooterContainer>

      </ThumbnailContainer>
    );
  }
}

export default Gamethumbnail;
