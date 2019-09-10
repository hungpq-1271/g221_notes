import React from 'react'
import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const StyledForm = styled(FormControl)`
  position: relative;
  width: 100%;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const SubmitButton = styled(Button)`
  width: 100%;
`

export default function Form({ submitButtonLabel, extraLinkEl, children, onSubmit }) {
  return (
    <StyledForm>
      {children}
      <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography>
              {extraLinkEl}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <SubmitButton
              variant="outlined"
              type="submit"
              onClick={onSubmit}
            >
              {submitButtonLabel}
            </SubmitButton>
          </Grid>
        </Grid>
    </StyledForm>
  )
}
