import React, {Component} from 'react';
import { connect } from 'react-redux';

import actions from 'actions';

class Login extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   token: this.props.match.params.token
    // }
    //
    // this.props.LOGIN();
  }


  render() {
    return(
      <div>
        Logging In....
      </div>
    );
  }
}

export default connect(null, actions.user)(Login);
