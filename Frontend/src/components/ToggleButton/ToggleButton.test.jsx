// import dependencies
import React from 'react'
// import react-testing methods
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
// the component to test
import ToggleButton from '.';

describe('ToggleButton component', () => {

  beforeAll(() => {
    render(<ToggleButton />)
  })

  it('should have the default value', () => {
    const input = screen.getByRole('switchButton')
    expect(input.value).toBe('on')
    fireEvent.change(input, { target: { value: true } })
  })
  afterAll(cleanup)
})