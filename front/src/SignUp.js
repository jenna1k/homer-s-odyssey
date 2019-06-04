import React, {Component} from 'react';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'email',
    };

    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField(e) {
    this.setState({email: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input
          type='email'
          name='email'
          placeholder='email'
          onChange={this.updateEmailField}
        />
      </div>
    );
  }
}
