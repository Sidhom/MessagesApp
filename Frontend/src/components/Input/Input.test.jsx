// import dependencies
import React from 'react'
// import react-testing methods
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
// the component to test
import Input from './';

describe('Input component', () => {

  beforeAll(() => {
    render(<Input />)
  })

  it('should have the default value', () => {
    const input = screen.getByLabelText("generic-input")
    expect(input.value).toBe('')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test');
  })
  afterAll(cleanup)
})