import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import { Route } from 'react-router-dom'

import Navigator from './components/Navigator'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`

const StyledContainer = styled(Container)`
  margin-top: 70px;
`

export default function DefaultLayout({ component: Component, ...restProps }) {
  return <Route
    {...restProps}
    render={props => {
      // TODO: check authentication
      // if (!isAuthenticated()) {
      //   redirect to home
      // }
      return (
        <Wrapper>
          <Navigator />
          <StyledContainer maxWidth="lg">
            <Component {...props} {...restProps} />
          </StyledContainer>
        </Wrapper>
      )
    }}
  />
}
