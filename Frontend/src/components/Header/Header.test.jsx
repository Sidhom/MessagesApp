// import dependencies
import React from 'react'
// import react-testing methods
import {cleanup, screen } from '@testing-library/react'
import { render } from '../../test-utils/test-utis';
// the component to test
import Header from '../Header';

describe('Header component', () => {

  beforeAll(() => {
    render(<Header />)
  })

  it('should display the header', () => {
    const title = screen.getByTestId('title');
    expect(title.textContent).toBe(" Leboncoin messanger ")
  })
  afterAll(cleanup)
})