// import dependencies
import React from 'react';
import recoil from 'recoil';
// import react-testing methods
import {  screen, cleanup, fireEvent, act } from '@testing-library/react';
import { render } from '../../test-utils/test-utis';
import AuthMenu from '../AuthMenu';
import hooks from '../../hooks/';

describe('AuthMenu component', () => {
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
        const logout = jest.fn();
        jest.spyOn(hooks, 'useLogout').mockImplementation(() => ({loggedUser: mockedUser, logout}));
        const useRecoilState = () => mockedUser;
        const useRecoilStateSpy = jest.spyOn(recoil, 'useRecoilState');
        useRecoilStateSpy.mockImplementation(() =>  useRecoilState);
        
    })
    beforeEach(()=> {
      fetch.mockClear();
      render(<AuthMenu />)
    })
    act(()=> {
      FetchUserPromise();
    })
    it('should have the right menuContainer in the dom', () => {
      expect(screen.getByRole('menuContainer')).toBeInTheDocument()
    })
    it('should call the login function when clicking on the login button', () => {
      const email = screen.getAllByTestId('generic-input')[0];
      const password = screen.getAllByTestId('generic-input')[1];
      fireEvent.change(email, { target: { value: 'test@gmail.com' } });
      fireEvent.change(password, { target: { value: 'test' } });
      const loginButton = screen.getByTestId("buttonTestId");
      loginButton.click();
    });
    it('should have the signup and signin links in the dom', () => {
      expect(screen.getByRole('signInLink')).toBeInTheDocument()
      expect(screen.getByRole('signUpLink')).toBeInTheDocument()
    })
  
    afterAll(cleanup)
  })