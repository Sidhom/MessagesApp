import React from 'react';
import {Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Inscription from '../components/Inscription';
import Login from '../components/Login';
import DiscussionForum from '../components/DiscussionForum';
import { userState } from '../store/selectors';

const Routes = () => {
    const connectedUser = useRecoilValue(userState);
    console.log('connectedUser',connectedUser)
    return (
     
            <Switch>
               {!connectedUser &&  <Route path="/Inscription" component={Inscription} />}
                {!connectedUser && <Route path="/" component={Login} />}
                {connectedUser &&  <Route path="/DiscussionForum" component={DiscussionForum} />}
            </Switch>
    )
}

export default Routes;