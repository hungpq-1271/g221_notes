import React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import styled from 'styled-components'

import ActionButton from './components/ActionButton'
import TabContainer from './components/TabContainer'
import TabContent from './components/TabContent'

export default function View({ activeIndex, onChange }) {
  return (
    <StyledContainer maxWidth="md">
      <div className="spacing-Top">
        <ActionButton />
        <Box display="flex" className="spacing-Top">
          <StyledVerticalTabs value={activeIndex} onChange={onChange}>
            <Tab label="ALL" className="childTab" />
            <Tab label="DONE" className="childTab" />
            <Tab label="NOT DONE" className="childTab" />
          </StyledVerticalTabs>

          { activeIndex === 0 && <TabContainer><TabContent /></TabContainer> }
          { activeIndex === 1 && <TabContainer><TabContent /></TabContainer> }
          { activeIndex === 2 && <TabContainer><TabContent /></TabContainer> }
        </Box>
      </div>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  .spacing-Top {
    margin-top: 30px;
  }
`

const StyledVerticalTabs = styled(Tabs)`
  .MuiTabs-flexContainer {
    flex-direction: column;
  }
  .MuiTabs-indicator {
    display: none;
  }
  .childTab {
    &:focus {
      outline: none;
    }
  }
  .Mui-selected {
    outline: none;
    color: navy;
    border-bottom: 2px solid navy;
  }
`
