import React from 'react'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'

import routes from 'routes'
import GithubButton from 'components/auth/GithubButton'
import Separator from 'components/auth/Separator'
import Form from 'components/auth/Form'

export default function View({ onChange, onSignup }) {
  return (
    <>
      <GithubButton label="Signup with github" />
      <Separator />
      <Form
        submitButtonLabel="Sign up"
        extraLinkEl={<Link href={routes.login}>Already registered?</Link>}
        onSubmit={onSignup}
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
        <TextField
          variant="outlined"
          type="password"
          label="Password Confirmation"
          fullWidth
          onChange={onChange}
        /><hr />
      </Form>
    </>
  )
}
