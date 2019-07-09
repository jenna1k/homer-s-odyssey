import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordbis: '',
      name: '',
      lastname: '',
      redirect: false,
      submitted: false,
    };

    this.updateEmailField = this.updateEmailField.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
        res => this.setState({flash: res.flash, submitted: true}),
        err => this.setState({flash: err.flash, submitted: true}),
      );
    this.handleClick();
  }

  handleClick() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false, redirect: true});
  }

  render() {
    const action = (
      <Button color='secondary' size='small' onClick={this.handleClose}>
        close
      </Button>
    );
    if (this.state.redirect && this.state.submitted && !this.state.open) {
      return <Redirect to='/' />;
    } else {
      return (
        <React.Fragment>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: '10px',
            }}>
            <Link to={{pathname: '/signin'}} style={{textDecoration: 'none'}}>
              <Button variant='contained' color='secondary'>
                Sign In
              </Button>
            </Link>
          </div>
          <div>
            {/* <h1>{JSON.stringify(this.state, 1, 1)}</h1> */}
            <h2>Sign up</h2>
            <form
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                margin: '10px',
              }}
              onSubmit={this.submitInfo}>
              <TextField
                type='email'
                name='email'
                label='email'
                onChange={this.updateEmailField}
              />
              <TextField
                type='password'
                name='password'
                label='password'
                onChange={this.updateEmailField}
              />
              <TextField
                type='password'
                name='passwordbis'
                label='confirm password'
                onChange={this.updateEmailField}
              />
              <TextField
                type='text'
                name='name'
                label='first name'
                onChange={this.updateEmailField}
              />
              <TextField
                type='text'
                name='lastname'
                label='last name'
                onChange={this.updateEmailField}
              />
              <input
                type='submit'
                value='Submit'
                id='submit-btn'
                style={{display: 'none'}}
              />
              <label htmlFor='submit-btn'>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  component='span'
                  onClick={this.handleClick}
                  style={{
                    margin: '5px',
                    display: 'flex',
                    alignSelf: 'flex-end',
                  }}>
                  submit
                </Button>
              </label>
              <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                open={this.state.open}
                onClose={this.handleClose}
                action={action}
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span id='message-id'>{this.state.flash}</span>}
              />
            </form>
          </div>
        </React.Fragment>
      );
    }
  }
}
