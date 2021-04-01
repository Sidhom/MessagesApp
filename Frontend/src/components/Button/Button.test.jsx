// import dependencies
import React from 'react'
// import react-testing methods
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
// the component to test
import Button from './';

describe('Button component', () => {
  const mockedAction = jest.fn();

  beforeAll(() => {
    render(<Button label="test" action={mockedAction} />)
  })

  it('should display the button elemnt', () => {
    const buttonContainer = screen.getByTestId("generic-button");
     expect(buttonContainer).toBeInTheDocument();
     const button = screen.getByTestId("buttonTestId");
     expect(button.textContent).toBe("test");
     fireEvent.click(button);
     expect(mockedAction.mock.calls.length).toEqual(1);
  })
  afterAll(cleanup)
})