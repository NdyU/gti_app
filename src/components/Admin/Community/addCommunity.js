import React, { Component } from 'react';
import CreateCommunityForm from 'components/Forms/Community/create';

class addCommunityForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      community_name: '',
      community_img: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  nameChange = (event) => {
    this.setState({community_name: event.target.value});
  }

  fileChange = (event) => {
    this.setState({community_img: event.target.value});
  }
  submit = () => {
    this.props.createCommunity(this.state);
    this.setState({community_name: '', community_img: ''});
  }

  render() {

    return(
      <div>
        <form>
          <label>
            Community Name:
            <input onChange={this.handleChange(event)} type='text' value={this.state.value}/>
          </label>
        </form>
        <form enctype='multipart/form-data'>
          <label>
            Image:
            <input type='file' onChange={this.handleChange(event)}/>
          </label>
        </form>
        <button onClick={ this.submit() }>Submit</button>
      </div>
    )
  }
}

export default addCommunityForm;
