import React from 'react'

import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import FilterListIcon from '@material-ui/icons/FilterList'
import styled from 'styled-components'

export default function ActionButton() {
  return (
    <div style={{display: "flex", flexDirection: "row-reverse" }}>
      <StyledFab variant="extended" color="default" aria-label="add">
        <AddIcon />
        Add
      </StyledFab>
      <StyledFab variant="extended" color="default" aria-label="filter">
        <FilterListIcon />
        Filter
      </StyledFab>
    </div>
  )
}

const StyledFab = styled(Fab)`
  margin: 5;
`
