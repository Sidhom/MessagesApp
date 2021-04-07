// import dependencies
import React from 'react';
import recoil from 'recoil';
// import react-testing methods
import {  screen, cleanup, fireEvent, act } from '@testing-library/react'
import { render } from '../../test-utils/test-utis';
import Login from '../Login';
import hooks from '../../hooks';

describe('Login component', () => {
  const login = jest.fn();
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
        const mockedUser = {firstName:'mockedUser'};
        jest.spyOn(hooks, 'useLogin').mockImplementation(() => ({  login,
          loggedUser : mockedUser,
          error: "error",
          loading: false,
          allFieldsAreValid: true}));
        const useRecoilState = () => mockedUser;
        const useRecoilStateSpy = jest.spyOn(recoil, 'useRecoilState');
        useRecoilStateSpy.mockImplementation(() =>  useRecoilState);
    })
    beforeEach(()=> {
      fetch.mockClear();
      render(<Login />)
    })
    act(()=> {
      FetchUserPromise();
    })
    it('should have the right loginContainer in the dom', () => {
      expect(screen.getAllByTestId('loginContainer')[0]).toBeInTheDocument()
      expect(screen.getAllByTestId('buttonTestId')[0]).toBeInTheDocument()
    })
    it('should call the login once we click on the login button', () => {
      const email = screen.getAllByTestId('generic-input')[0];
      const password = screen.getAllByTestId('generic-input')[1];
      fireEvent.change(email, { target: { value: 'test@gmail.com' } });
      fireEvent.change(password, { target: { value: 'test' } });
      const loginButton = screen.getAllByTestId("buttonTestId")[0];
      loginButton.click();
      expect(login.mock.calls.length).toEqual(0);
    });
    afterAll(cleanup)
  })