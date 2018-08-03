import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

class DeleteCommunityForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      community_id:''
    }
  }

  componentDidMount = () => {
    //Populate a list of communities in props
    //redux action
    this.props.GET_LIST();
  }

  renderCommunityList = () => {
    var communityList = [];

    communityList.push(
      <option key='0' value=''></option>
    )
    for(var community_id in this.props.community_list) {
      if(this.props.community_list.hasOwnProperty(community_id)) {
        communityList.push(
          <option key={community_id} value={community_id}>
            {this.props.community_list[community_id].displayName}
          </option>
        );
      }
    }
    return communityList;
    // return this.props.community_list.map((community, index) => {
    //   return <option value={community.id}>{community.displayName}</option>
    // });
  }

  changeCommunity = (event) => {
    console.log(event.target.value);
    this.setState({community_id: event.target.value});
  }

  submit = () => {
    if(this.state.community_id == '') {
      alert('Please select a community to be deleted');
      return;
    }
    this.props.DELETE(this.state);
    this.props.GET_LIST();
    this.setState({community_id: ''});
  }

  render() {

    return(
      <div>
        <form id='deleteCommunityForm'>
          <label>
            Community List:
            <select onChange={ this.changeCommunity } name='communityList' form='deleteCommunityForm'>
              { this.renderCommunityList() }
            </select>
          </label>
        </form>
        <button onClick={ this.submit }>Delete</button>
      </div>
    )
  }
}

function mapStatesToProps(state) {
  return ({community_list: state.community.list});
}

export default connect(mapStatesToProps, actions.community)(DeleteCommunityForm);
