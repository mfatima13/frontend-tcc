import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import Home from '../pages/Home';
import Project from '../pages/Project';
import Login from '../pages/Login';
import SingUp from '../pages/SingUp';

const AppRoutes: React.FC = () => {

    console.log("entrou no app")
    return (
        <Switch>
            <Route component={Login} path="/" exact />
            <Route component={SingUp} path="/singup" />
            <Route component={Home} path="/home" exact isPrivate />
            <Route component={Project} path="/project/:id" isPrivate />
        </Switch>

    );


}

export default AppRoutes;