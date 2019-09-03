import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import routes from 'routes'
import DefaultLayout from 'layouts/DefaultLayout'
import HomePage from 'containers/HomePage'
import LoginPage from 'containers/LoginPage'
import SignupPage from 'containers/SignupPage'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout exact path={routes.home} component={HomePage} />
        <DefaultLayout path={routes.login} component={LoginPage} />
        <DefaultLayout path={routes.signup} component={SignupPage} />
      </Switch>
    </BrowserRouter>
  )
}
