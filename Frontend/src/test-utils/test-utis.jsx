import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { render } from "@testing-library/react";
export {fireEvent} from "@testing-library/react";
import Routes from '../routes';

const customRender = (elements) => render(
  <RecoilRoot>
    <Router>
    <Routes />
      {elements}
      </Router>
    </RecoilRoot>
    );

export {customRender as render};