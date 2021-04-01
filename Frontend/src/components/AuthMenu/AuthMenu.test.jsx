// import dependencies
import React from 'react';
import recoil from 'recoil';
// import react-testing methods
import {  screen, cleanup } from '@testing-library/react';
import { render } from '../../test-utils/test-utis';
import AuthMenu from '../AuthMenu';

describe('AuthMenu component', () => {
    beforeAll(() => {
        const useRecoilValue = jest.fn();
        const useRecoilValueSpy = jest.spyOn(recoil, 'useRecoilValue');
        useRecoilValueSpy.mockImplementation(() =>  useRecoilValue);
      render(<AuthMenu />)
    })
  
    it('should have the right menuContainer in the dom', () => {
  
      expect(screen.getByRole('menuContainer')).toBeInTheDocument()
    })
  
    afterAll(cleanup)
  })