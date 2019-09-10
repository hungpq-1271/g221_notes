import React from 'react'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'

import routes from 'routes'
import GithubButton from 'components/auth/GithubButton'
import Separator from 'components/auth/Separator'
import Form from 'components/auth/Form'

export default function View({ onChange, onLogin }) {
  return (
    <>
      <GithubButton label="Login with Github" />
      <Separator />
      <Form
        submitButtonLabel="Log in"
        extraLinkEl={<Link href={routes.signup}>Create new account</Link>}
        onSubmit={onLogin}
      >
        <TextField
          variant="outlined"
          label="Email Address"
          fullWidth
          onChange={onChange}
        /><hr />
        <TextField
          variant="outlined"
          type="password"
          label="Password"
          fullWidth
          onChange={onChange}
        /><hr />
      </Form>
    </>
  )
}
