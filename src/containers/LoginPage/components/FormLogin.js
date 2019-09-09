import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';


const LoginFormControl = styled(FormControl)`
  padding: 10em;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
const LoginButton = styled(Button)`
  float: left;
`
const LoginGithubButton = styled(Button)`
  margin:auto;
  display:block;
`

class FormLogin extends Component {
  render() {
    return (
      <div className="LoginDiv">
        <LoginGithubButton variant="outlined">
        <i className="fa fa-github" aria-hidden="true"></i> Login with github
        </LoginGithubButton>
        <LoginFormControl>
          <TextField variant="outlined" id="email-input" label="Email Address" />
          <hr/>
          <TextField variant="outlined" type="password" label="Password" />
          <hr/>
          <Grid container spacing={3}>
            <Grid item xs={10}>
              <FormHelperText>Create new account</FormHelperText>
            </Grid>
            <Grid item xs={2}>
              <LoginButton>Log in</LoginButton>
            </Grid>
          </Grid>
        </LoginFormControl>
      </div>
    )
  }
}

export default FormLogin;
