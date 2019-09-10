import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import GithubButton from '../index'

describe('<GithubButton />', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<GithubButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
