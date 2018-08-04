import React, { Component } from 'react';
import 'components/HomePage/HomePage.css';
import { connect } from 'react-redux';
import actions from 'actions';

import Gamethumbnail from 'components/HomePage/Gamethumbnail';
import populateUser from 'components/PopulateStates/populateUser';

import {
  HomePageContainer,
  HomePageBannerContainer,
  HomePageBannerBox,
  HomePageBanner,
  BannerGreet,
  CommunityPanelContainer,
  CommunityPanelHeader,
  CommunityPanel,
  White,
  Black
} from 'components/HomePage/styles';

class HomePage extends Component {

  constructor(props) {
      super(props);

      this.renderCommunityList = this.renderCommunityList.bind(this);
      console.log('HomePage constructor');
  }

  componentWillMount = () => {
    console.log('HomePage Will Mount');
  }

  componentDidMount = () => {
    console.log('HomePage Did Mount');
    this.props.GET_LIST();
  }

  componentWillUpdate = () => {
    console.log('HomePage Will Update');
  }
  componentDidUpdate = () => {
    console.log('HomePage Did Update');
  }


//   onUnload(event) { // the method that will be used for both add and remove event
//     fetch('/api/tag').then();
//     console.log("hellooww")
//     event.returnValue = "Hellooww"
//
// }
//
//
//   componentDidMount() {
//     // fetch('/api/tag').then();
//     window.addEventListener("beforeunload", this.onUnload);
//     console.log("added listener");
//   }
//
//   componentWillUnmount() {
//
//     window.removeEventListener("beforeunload", this.onUnload);
//
//     console.log("removed listener");
//   }

  renderCommunityList = () => {

    var CommunityListDOM = [];

    for(var community_id in this.props.community_list) {
      if(this.props.community_list.hasOwnProperty(community_id)) {
        CommunityListDOM.push(
          <Gamethumbnail key={community_id} community_id={community_id} community={this.props.community_list[community_id]}/>
        );
      }
    }
    return CommunityListDOM;
  }

  render() {

    console.log('HomePage rendered');
    // const preview_game_list;

    return (
      <HomePageContainer>
        <HomePageBannerContainer>
          <HomePageBannerBox>
            <HomePageBanner>
              <div>
                <Black>A Platform made <White>spe</White>ciail<White>ly for Gamers Through</White> the Internet</Black>.
              </div>
              <BannerGreet>
                <White>W</White><Black>elcome to GTI</Black>
              </BannerGreet>
            </HomePageBanner>
          </HomePageBannerBox>
        </HomePageBannerContainer>

        <CommunityPanelContainer>
          <CommunityPanelHeader>
            Community:
          </CommunityPanelHeader>
          <CommunityPanel>
            {this.renderCommunityList()}
          </CommunityPanel>
        </CommunityPanelContainer>
      </HomePageContainer>
    );
  }
}

function mapStatesToProps(state) {
  return {community_list: state.community.list}
}

export default connect(mapStatesToProps, actions.community)(populateUser(HomePage));
