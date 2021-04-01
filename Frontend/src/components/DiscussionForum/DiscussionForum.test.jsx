// import dependencies
import React from 'react'
import recoil from 'recoil';
// import react-testing methods
import {  screen, cleanup } from '@testing-library/react'
import { render } from '../../test-utils/test-utis';
import DiscussionForum from '../DiscussionForum';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ }),
  })
);
describe('DiscussionForum component', () => {

      afterEach(() => {
        jest.restoreAllMocks();
      });
    beforeAll(() => {
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState');
        const useEffectSpy = jest.spyOn(React, 'useEffect');
        useEffectSpy.mockImplementation(() => useEffectSpy);
        useStateSpy.mockImplementation((init) => [init, setState]);
        const useRecoilValue = jest.fn();
        const useRecoilValueSpy = jest.spyOn(recoil, 'useRecoilValue');
        useRecoilValueSpy.mockImplementation(() =>  useRecoilValue);
    
      render(<DiscussionForum />)
    })
  
    it('should have the right discussionForumContainer in the dom', () => {
  
      expect(screen.getAllByTestId('discussionForumContainer')[0]).toBeInTheDocument()
    })
  
    afterAll(cleanup)
  })