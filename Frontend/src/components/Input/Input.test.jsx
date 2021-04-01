// import dependencies
import React from 'react'
// import react-testing methods
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
// the component to test
import Input from '../Input';

describe('Input component', () => {
  const mockedAction = jest.fn();
  beforeAll(() => {
    render(<Input  required={true} type="email" pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" action={mockedAction}/>)
  })
 
  it('should have the default value and change value', () => {
    const input = screen.getByTestId("generic-input")
    expect(input.value).toBe('')
    expect(input.type).toBe('email')
    fireEvent.change(input, { target: { value: 'test@gmail.com' } })
  expect(input.value).toBe('test@gmail.com');
  expect(input.required).toBe(true);
  fireEvent.change(input, { target: { value: 'test2@gmail.com' } });
  expect(input.pattern).toBe("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
  }) 
  afterAll(cleanup)
})