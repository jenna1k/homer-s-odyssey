import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.updateField = this.updateField.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }

  updateField(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  submitInfo(e) {
    e.preventDefault();
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/profile' />;
    } else {
      return (
        <React.Fragment>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: '10px',
            }}>
            <Link to={{pathname: '/signup'}} style={{textDecoration: 'none'}}>
              <Button variant='contained' color='secondary'>
                Sign Up
              </Button>
            </Link>
          </div>
          <div>
            <h2>Sign In</h2>
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
                onChange={this.updateField}
              />
              <TextField
                type='password'
                name='password'
                label='password'
                onChange={this.updateField}
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
