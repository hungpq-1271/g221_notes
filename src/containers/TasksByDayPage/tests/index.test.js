import React from 'react'
import { render } from '@testing-library/react'

import TasksByDay from '../index'

describe('<TasksByDay />', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<TasksByDay />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
