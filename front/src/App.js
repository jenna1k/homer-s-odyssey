import React from 'react';
import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function App() {
  return (
    <MuiThemeProvider>
      <Grid container alignItems='center' style={{height: '100%'}}>
        <Grid item xs={12}>
          <Paper elevation={4} style={{margin: 32}}>
            <Grid container alignItems='center' justify='center'>
              <Grid item xs={12} sm={6} style={{'text-align': 'center'}}>
                <img
                  src='http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png'
                  alt='homer'
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                alignContent='center'
                style={{padding: '3rem'}}>
                <BrowserRouter>
                  <Switch>
                    <Route exact path='/' component={SignIn} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/profile' component={Profile} />
                  </Switch>
                </BrowserRouter>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
