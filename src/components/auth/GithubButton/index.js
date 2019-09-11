import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Button from '@material-ui/core/Button'

const StyledButton = styled(Button)`
  margin:auto;
  margin-top: 2em;
  margin-bottom: 1em;
  font-size: 1.25em;
  display:block;
  width: 100%;
`

export default function GithubButton({ label, onClick }) {
  return (
    <StyledButton variant="outlined" onClick={onClick}>
      <FontAwesomeIcon icon={faGithub} /> {label}
    </StyledButton>
  )
}
