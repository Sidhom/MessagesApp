// import dependencies
import React from 'react';
import recoil from 'recoil';
// import react-testing methods
import {  screen, cleanup } from '@testing-library/react';
import { render } from '../../test-utils/test-utis';
import MessagesList from '../MessagesList';

describe('MessagesList component', () => {
    beforeAll(() => {
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState');
        const useEffectSpy = jest.spyOn(React, 'useEffect');
        useEffectSpy.mockImplementation(() => useEffectSpy);
        useStateSpy.mockImplementation((init) => [init, setState]);
        const useRecoilValue = jest.fn();
        const useRecoilValueSpy = jest.spyOn(recoil, 'useRecoilValue');
        useRecoilValueSpy.mockImplementation(() =>  useRecoilValue);

    })
    beforeEach(()=> {
      render(<MessagesList findUser={jest.fn()}privateMessages={["test"]} connectedUser={{firstName: "test"}} />)
    })
  
    it('should have the right messagesListContainer in the dom', () => {
  
      expect(screen.getByRole('messagesListContainer')).toBeInTheDocument()
    })
    it('should have privateMessages in the dom', () => {
  
      expect(screen.getByTestId('privateMessages')).toBeInTheDocument()
    })
    
   
    afterAll(cleanup)
  })