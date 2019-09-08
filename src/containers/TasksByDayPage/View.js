import React from 'react'

import Container from '@material-ui/core/Container'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import styled from 'styled-components'

import ActionButton from './components/ActionButton'
import TabContainer from './components/TabContainer'
import TabContent from './components/TabContent'

export default function View({ activeIndex, onChange }) {
  return (
    <Container maxWidth="md">
      <div style={{marginTop: 30}}>
        <ActionButton />
        <div style={{display: 'flex', marginTop: 30}}>
          <StyledVerticalTabs value={activeIndex} onChange={onChange}>
            <StyledTab label='ALL' />
            <StyledTab label='DONE' />
            <StyledTab label='NOT DONE' />
          </StyledVerticalTabs>

          { activeIndex === 0 && <TabContainer><TabContent /></TabContainer> }
          { activeIndex === 1 && <TabContainer><TabContent /><TabContent /><TabContent /></TabContainer> }
          { activeIndex === 2 && <TabContainer><TabContent /></TabContainer> }
        </div>
      </div>
    </Container>
  )
}

const StyledVerticalTabs = styled(Tabs)`
  .MuiTabs-flexContainer {
    flex-direction: column;
  }
  .MuiTabs-indicator {
    display: none;
  }
`

const StyledTab = styled(Tab)`
  .MuiTab-textColorInherit.Mui-selected {
    outline: none;
    color: navy;
    border-bottom: 2px solid navy;
  }
  &:focus {
    outline: none;
    color: navy;
    border-bottom: 2px solid navy;
  }
`
