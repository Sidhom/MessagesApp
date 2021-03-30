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
      const container = 'container';
  
      expect(screen.getByRole('div',container, options = {
        hidden: true
      })).toBeInTheDocument()
    })
  
    afterAll(cleanup)
  })