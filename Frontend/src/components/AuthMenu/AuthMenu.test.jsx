// import dependencies
import React from 'react'
// import react-testing methods
import {  screen, cleanup } from '@testing-library/react'
import { render } from '../../test-utils/test-utis';
import AuthMenu from '../AuthMenu';

describe('AuthMenu component', () => {
    beforeAll(() => {
      render(<AuthMenu />)
    })
  
    it('should have the right menuContainer in the dom', () => {
  
      expect(screen.getByRole('menuContainer')).toBeInTheDocument()
    })
  
    afterAll(cleanup)
  })