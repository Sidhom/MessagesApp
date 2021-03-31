// import dependencies
import React from 'react'
// import react-testing methods
import { render, cleanup, screen } from '@testing-library/react'
// the component to test
import Header from './';

describe('Header component', () => {

  beforeAll(() => {
    render(<Header />)
  })

  it('should display the header', () => {
    const title = screen.getByTestId('title')
    expect(title.value).toBe('Leboncoin messanger')
  })
  afterAll(cleanup)
})