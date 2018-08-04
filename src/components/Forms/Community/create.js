import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

class CreateCommunityForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      community_name: '',
      img_file: ''
    };

    this.nameChange = this.nameChange.bind(this);
    this.fileChange = this.fileChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  nameChange = (event) => {
    this.setState({community_name: event.target.value});
  }

  fileChange = (event) => {
    console.log(event.target.files[0]);
    this.setState({img_file: event.target.files[0]});
  }
  submit = () => {
    this.props.CREATE(this.state);
    this.setState({community_name: '', img_file: ''});
  }

  render() {

    return(
      <div>
        <form>
          <label>
            Community Name:
            <input onChange={ this.nameChange } type='text' value={this.state.value}/>
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

export default connect(null, actions.community)(CreateCommunityForm);
