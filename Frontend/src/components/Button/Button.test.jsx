// import dependencies
import React from 'react'
// import react-testing methods
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
// the component to test
import Button from './';

describe('Button component', () => {

  beforeAll(() => {
    render(<Button label="test" />)
  })

  it('should display the button elemnt', () => {
    const button = screen.getByLabelText("generic-button")
    // expect(button.children.type).toBe("button")
  })
  afterAll(cleanup)
})