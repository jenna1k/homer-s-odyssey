import React, {Component} from 'react';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordbis: '',
      name: '',
      lastname: '',
    };

    this.updateEmailField = this.updateEmailField.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }

  updateEmailField(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  submitInfo(e) {
    e.preventDefault();
    console.log(this.state);
    fetch('/auth/signup', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    })
      .then(res => res.json())
      .then(
        res => this.setState({flash: res.flash}),
        err => this.setState({flash: err.flash}),
      );
  }

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={this.submitInfo}>
          <input
            type='email'
            name='email'
            placeholder='email'
            onChange={this.updateEmailField}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            onChange={this.updateEmailField}
          />
          <input
            type='password'
            name='passwordbis'
            placeholder='confirm password'
            onChange={this.updateEmailField}
          />
          <input
            type='text'
            name='name'
            placeholder='first name'
            onChange={this.updateEmailField}
          />
          <input
            type='text'
            name='lastname'
            placeholder='last name'
            onChange={this.updateEmailField}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
