import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {List, ListItem, ListItemText, Button} from '@material-ui/core';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        email: 'homer.simpson@wildcodeschool.fr',
        name: 'Homer',
        lastname: 'Simpson',
      },
    };
  }
  render() {
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
              Sign Out
            </Button>
          </Link>
        </div>
        <div>
          <List>
            <ListItem>
              <ListItemText primary='email' secondary='my email' />
            </ListItem>
          </List>
        </div>
      </React.Fragment>
    );
  }
}
