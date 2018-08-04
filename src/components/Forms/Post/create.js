import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

class CreatePostForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      external_url: '',
      image_file: '',
      community_id: ''
    };

    this.changeCommunity = this.changeCommunity.bind(this);
    this.fileChange = this.fileChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.linkChange = this.linkChange.bind(this);
    this.submit = this.submit.bind(this);
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
  }

  changeCommunity = (event) => {
    this.setState({community_id: event.target.value});
  }

  titleChange = (event) => {
    this.setState({title: event.target.value});
  }

  linkChange = (event) => {
    this.setState({external_url: event.target.value});
  }

  fileChange = (event) => {
    this.setState({image_file: event.target.files[0]});
  }
  submit = () => {
    console.log(this.state);
    this.props.CREATE(this.state);
  }

  render() {


    return(
      <div>
        <form>
          <label>
            Community List:
            <select onChange={ this.changeCommunity } name='communityList' form='deleteCommunityForm'>
              { this.renderCommunityList() }
            </select>
          </label>
          <label>
            Title:
            <input type="text" value={ this.state.title } onChange={this.titleChange}/>
          </label>
          <label>
            Link to Source:
            <input type="text" value={ this.state.external_url } onChange={ this.linkChange }/>
          </label>
        </form>
        <form encType='multipart/form-data'>
          <label>
            Image:
            <input type='file' onChange={ this.fileChange }/>
          </label>
        </form>
        <button onClick={ this.submit }>Submit</button>
      </div>
    )
  }
}

function mapStatesToProps(state) {
  return ({
    community_list: state.community.list,
  });
}


export default connect(mapStatesToProps, actions.post)(CreatePostForm);
