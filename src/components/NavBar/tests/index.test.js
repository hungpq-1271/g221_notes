import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import NavBar from '../index'

describe('<NavBar />', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<NavBar />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
