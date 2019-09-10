import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import RoundButton from '../index'

describe('<RoundButton />', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<RoundButton>.</RoundButton>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
