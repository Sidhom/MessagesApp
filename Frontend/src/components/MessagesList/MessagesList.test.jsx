// import dependencies
import React from 'react';
import recoil from 'recoil';
// import react-testing methods
import {  screen, cleanup } from '@testing-library/react';
import { render } from '../../test-utils/test-utis';
import MessagesList from '../MessagesList';

describe('MessagesList component', () => {
  const mockedFindUser1 = () => {
    return {_id:1, firstName:"Jean"};
  }
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
      render(<MessagesList findUser={mockedFindUser1} publicMessages={[{_id: 1,message: "test1", senderId:1}]}   privateMessages={[{_id: 2,message:"test", senderId:1}]} connectedUser={{firstName: "Jean", _id:1}} />)
    })
  
    it('should have the right messagesListContainer in the dom', () => {
  
      expect(screen.getByRole('messagesListContainer')).toBeInTheDocument()
    })
    it('should have privateMessages in the dom', () => {
  
      expect(screen.getByTestId('privateMessages')).toBeInTheDocument()
    })
    it('should have yourMessages in the dom', () => {
  
      expect(screen.getByTestId('yourMessages')).toBeInTheDocument()
    })
    it('should have you in the dom', () => {
  
      expect(screen.getByTestId('you')).toBeInTheDocument()
      expect(screen.getByTestId('you').textContent).toBe('YOU :')
    })
    it('should have the sender name in the dom', () => {
      render(<MessagesList findUser={mockedFindUser1} publicMessages={[{_id: 1, message: "test1", senderId:1}]}   privateMessages={[{ _id:2, message:"test", senderId:1}]} connectedUser={{firstName: "Slim", _id:2}} />)
      expect(screen.getByTestId('otherMessages')).toBeInTheDocument()
      expect(screen.getByTestId('senderName').textContent).toBe('Jean :')
    })
    
   
    afterAll(cleanup)
  })