// import dependencies
import React from 'react'
// import react-testing methods
import {  screen, cleanup } from '@testing-library/react'
import { render } from '../../test-utils/test-utis';
import Login from '../Login';

describe('Login component', () => {
    beforeAll(() => {
      render(<Login />)
    })
  
    it('should have the right loginContainer in the dom', () => {
  
      expect(screen.getAllByTestId('loginContainer')[0]).toBeInTheDocument()
    })
  
    afterAll(cleanup)
  })