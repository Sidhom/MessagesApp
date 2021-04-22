import React from 'react';
import {Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Inscription from '../components/Inscription';
import Login from '../components/Login';
import DiscussionForum from '../components/DiscussionForum';
import { userState } from '../store/selectors';
import PrivateMessages from '../components/PrivateMessages';

const Routes = () => {
    const connectedUser = useRecoilValue(userState);
    return (
     
            <Switch>
               {!connectedUser &&  <Route path="/Inscription" component={Inscription} />}
                {!connectedUser && <Route exact path="/" component={Login} />}
                {connectedUser &&  <Route exact path="/" component={DiscussionForum} />}
                {connectedUser && <Route path="/privateMessage/:destinationName" component={PrivateMessages} />}
            </Switch>
    )
}

export default Routes;