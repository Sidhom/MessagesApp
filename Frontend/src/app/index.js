import React from "react";
import {   BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from "../components/Header";
import Routes from "../routes";
import styles from './App.css';

const App = () => {
  return(
    <Router >
       <div role='container' className={styles.app}>
         <RecoilRoot>
          <Router>
          <Header />
          <Routes />
          </Router>
          </RecoilRoot>
    </div>
  </Router>
)
}
export default App;