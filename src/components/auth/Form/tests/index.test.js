import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Form from '../index'

describe('<Form />', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<Form />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
