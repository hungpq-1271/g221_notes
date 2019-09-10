import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Separator from '../index'

describe('<Separator />', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<Separator />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
