import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import routes from '../../routes'

const LoginFormControl = styled(FormControl)`
  position: relative;
  width: 100%;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const LoginGithubButton = styled(Button)`
  margin:auto;
  margin-top: 2em;
  margin-bottom: 1em;
  font-size: 1.25em;
  display:block;
  width: 100%;
`

const LoginButton = styled(Button)`
  width: 100%;
`

const HeaderSeparation = styled.h4`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #818078;
  opacity: .5;
  line-height: 0.1em;
  margin: 10px 0 20px;
`
const SpanSeparation = styled.span`
  background: #fff;
  padding: 0 10px;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
`

export default function View({handleInputChange, handleLogin}) {
  return (
    <>
      <LoginGithubButton variant="outlined">
        <FontAwesomeIcon icon={faGithub} /> Login with github
      </LoginGithubButton>
      <HeaderSeparation><SpanSeparation>OR</SpanSeparation></HeaderSeparation>
      <LoginFormControl>
        <TextField variant="outlined" id="email-input" label="Email Address" fullWidth onChange={handleInputChange} />
        <hr/>
        <TextField variant="outlined" type="password" label="Password" fullWidth onChange={handleInputChange} />
        <hr/>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography>
              <Link href={routes.signup}>Create new account</Link>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <LoginButton variant="outlined" onClick={handleLogin}>Log in</LoginButton>
          </Grid>
        </Grid>
      </LoginFormControl>
    </>
  )
}
