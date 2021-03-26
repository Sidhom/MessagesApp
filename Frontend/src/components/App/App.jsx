import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import MessagesList from '../messagesList/MessagesList.jsx'

const App = () => (
    <Router>
      <Switch>
        <Route path="/">
            <MessagesList />
        </Route>
      </Switch>
  </Router>
)
export default App;