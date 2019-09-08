import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import routes from 'routes'
import DefaultLayout from 'layouts/DefaultLayout'
import HomePage from 'containers/HomePage'
import LoginPage from 'containers/LoginPage'
import SignupPage from 'containers/SignupPage'
import TasksPage from 'containers/TasksPage'
import TasksByDayPage from 'containers/TasksByDayPage'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout exact path={routes.home} component={HomePage} />
        <DefaultLayout path={routes.login} component={LoginPage} />
        <DefaultLayout path={routes.signup} component={SignupPage} />
        <DefaultLayout path={routes.task} component={TasksPage} />
        <DefaultLayout path={routes.tasksbyday} component={TasksByDayPage} />
      </Switch>
    </BrowserRouter>
  )
}
