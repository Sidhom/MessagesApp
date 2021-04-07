import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import useAddMessage from '../useAddMessage'

test('should send the message', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  const useEffectSpy = jest.spyOn(React, 'useEffect');
  useEffectSpy.mockImplementation(() => useEffectSpy);
  useStateSpy.mockImplementation((init) => [init, setState]);

  const FetchPromise = () => Promise.resolve({
    json: () => Promise.resolve({ user: { _id:1, firstName: "mockeduser" } }),
  });
  global.fetch = jest.fn(() =>
  FetchPromise()
);
})
test('should send the private message', () => {
  const { result } = renderHook(() => useAddMessage({message:"test", destinationId: 1, senderId:2, setvalue:jest.fn(), setPublicMessages:jest.fn() ,setPrivateMessages:jest.fn(), publicMessages:[{message:"ts", senderId:2}], privateMessages:[{message:"hello", senderId:2, destinationId:1}]}))

  const FetchPromise = () => Promise.resolve({
    json: () => Promise.resolve({ message: { _id:1, message:"msg" } }),
  });
  global.fetch = jest.fn(() =>
  FetchPromise()
);

  act(() => {
    result.current.sendMessage();
  });
  expect(result.current.loading).toBe(false);
})
test('should send the public message', () => {
  const FetchPromise = () => Promise.resolve({
    json: () => Promise.resolve({ message: { _id:1, message: "msg" } }),
  });
  global.fetch = jest.fn(() =>
  FetchPromise()
);
  const { result } = renderHook(() => useAddMessage({message:"test", destinationId: null, senderId:2, setvalue:jest.fn(), setPublicMessages:jest.fn() ,setPrivateMessages:jest.fn(), publicMessages:[{message:"ts", senderId:2}], privateMessages:[{message:"hello", senderId:2, destinationId:1}]}))

  act(() => {
    result.current.sendMessage();
  })
});