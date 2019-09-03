import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import NonStyleLink from 'components/NonStyleLink'
import routes from 'routes'

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

const ButtonsWrapper = styled.div`
`

const StyledButton = styled(Button)`
  color: white;
`

export default function Navigator() {
  return (
    <AppBar>
      <StyledToolbar>
        <NonStyleLink to={routes.home}>
          <StyledButton>
            Home
          </StyledButton>
        </NonStyleLink>
        <ButtonsWrapper>
          <NonStyleLink to={routes.login}>
            <StyledButton>
              Login
            </StyledButton>
          </NonStyleLink>
          <NonStyleLink to={routes.signup}>
            <StyledButton>
              Signup
            </StyledButton>
          </NonStyleLink>
        </ButtonsWrapper>
      </StyledToolbar>
    </AppBar>
  )
}
