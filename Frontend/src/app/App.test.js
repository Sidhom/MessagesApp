// import dependencies
import React from 'react'
// import react-testing methods
import { render, screen, cleanup } from '@testing-library/react';
import App from '../app';

describe('App component', () => {
    beforeAll(() => {
      render(<App />)
    })
  
    it('should have the right container in the dom', () => {
  
      expect(screen.getByRole('container')).toBeInTheDocument()
    })
  
    afterAll(cleanup)
  })