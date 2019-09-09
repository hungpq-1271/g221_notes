import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import styled from 'styled-components'

const StyledNavBar = styled(AppBar)`
  backgroud-color: black;
  color: white;
  font-family: Roboto
`

const LoginButton = styled(Button)`
  margin-left: auto;
`

function NavBar() {
  return (
    <div className="NavBar">
      <StyledNavBar>
        <Toolbar>
          <TypoGraphy variant="title">
            <h4>G221 Notes&Tasks</h4>
          </TypoGraphy>
          <LoginButton>Login</LoginButton>
        </Toolbar>
      </StyledNavBar>
    </div>
  );
}

export default NavBar
