import React from 'react'

import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

export default function TabContainer({ children }) {
  return <StyledTypography component="div">{children}</StyledTypography>
}

const StyledTypography = styled(Typography)`
  padding: 0 24px 24px;
  width: 80%;
`
