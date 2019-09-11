import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import NonStyleLink from '../index'

describe('<NonStyleLink />', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<NonStyleLink />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
