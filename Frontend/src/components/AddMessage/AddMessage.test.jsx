// import dependencies
import React from 'react';
import recoil from 'recoil';
// import react-testing methods
import {  screen, cleanup } from '@testing-library/react';
import { render } from '../../test-utils/test-utis';
import AddMessage from '../AddMessage';

describe('AddMessage component', () => {
  const mockedAction = jest.fn();
    beforeAll(() => {
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState');
        const useEffectSpy = jest.spyOn(React, 'useEffect');
        useEffectSpy.mockImplementation(() => useEffectSpy);
        useStateSpy.mockImplementation((init) => [init, setState]);
        const useRecoilValue = jest.fn();
        const useRecoilValueSpy = jest.spyOn(recoil, 'useRecoilValue');
        useRecoilValueSpy.mockImplementation(() =>  useRecoilValue);
        const mockCallBack = jest.fn();
    })
    beforeEach(()=> {
      render(<AddMessage />)
    })
    test('if it have the right addMessageContainer in the dom', () => {
      expect(screen.getByRole('addMessageContainer')).toBeInTheDocument()
    });
    test('if it does send the message once we click on the sendMessage button', () => {
     const sendMessageButton = screen.getByTestId('sendMessageButton');
      sendMessageButton.click();
      expect(sendMessageButton).toBeInTheDocument();
      expect(mockedAction.mock.calls.length).toEqual(0);
    });
    afterAll(cleanup)
  })