import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import App from '../index'

describe('<App>', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
