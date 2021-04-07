// import dependencies
import React from 'react';
import recoil from 'recoil';
// import react-testing methods
import {  screen, cleanup, fireEvent, act } from '@testing-library/react';
import { render } from '../../test-utils/test-utis';
import AddMessage from '../AddMessage';
import hooks from '../../hooks';

describe('AddMessage component', () => {
  const mockedAction = jest.fn();
  const FetchUserPromise = () => Promise.resolve({
    json: () => Promise.resolve({ user: { firstName: "test" } }),
  });
  global.fetch = jest.fn(() =>
  FetchUserPromise()
);
    beforeAll(() => {
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState');
        const useEffectSpy = jest.spyOn(React, 'useEffect');
        useEffectSpy.mockImplementation(() => useEffectSpy);
        useStateSpy.mockImplementation((init) => [init, setState]);
        const useRecoilValue = jest.fn();
        const useRecoilValueSpy = jest.spyOn(recoil, 'useRecoilValue');
        useRecoilValueSpy.mockImplementation(() =>  useRecoilValue);
        jest.spyOn(hooks, 'useAddMessage').mockImplementation(() => ({ sendMessage: mockedAction, loading: false, privateMsg: "test", setPrivateMsg: jest.fn()}));
    })
    beforeEach(()=> {
      fetch.mockClear();
      render(<AddMessage />)
    })
    act(()=> {
      FetchUserPromise();
    }), 
    test('if it have the right addMessageContainer in the dom', () => {
      expect(screen.getByRole('addMessageContainer')).toBeInTheDocument()
    });
    test('if it does send the message once we click on the sendMessage button', () => {
     const sendMessageButton = screen.getByTestId('sendMessageButton');
      sendMessageButton.click();
      expect(sendMessageButton).toBeInTheDocument();
      expect(mockedAction.mock.calls.length).toEqual(0);
    });
    test('if it does send the message once we click on the Enter', () => {
      const input = screen.getByRole("addMessageContainer")
    expect(input.value).toBe('')
    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.keyDown(input, {key: 'Enter'});
    expect(mockedAction.mock.calls.length).toEqual(0);
     });
     test('if it does make the message a private one', () => {
      const toggleButton = screen.getByTestId("switchBox")
    expect(toggleButton.checked).toBe(false);
    fireEvent.change(toggleButton, { target: { checked: true } })
    expect(toggleButton.checked).toEqual(true);
     });
     
    
    afterAll(cleanup)
  })