// import dependencies
import React from 'react'
// import react-testing methods
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
// the component to test
import ToggleButton from '../ToggleButton';

describe('Input component', () => {

  beforeAll(() => {
    render(<ToggleButton />)
  })

  it('should have the default value', () => {
    const input = screen.getByRole('switchButton')
    const inputID = screen.getByTestId('switchBox');
    expect(input.value).toBe('on')
    fireEvent.change(input, { target: { value: true } })
  })

  // it('should have the updated value', () => {
  //   expect(input.value).toBe('ok')
  // })

  // it('should have an element with this id', () => {
  //   expect(inputID).not.toBeNull();
  // })

  afterAll(cleanup)
})