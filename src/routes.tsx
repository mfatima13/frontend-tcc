import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import SingUp from './pages/SingUp';
import Home from './pages/Home';
import Project from './pages/Project';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Login} path="/" exact />
                <Route component={Home} path="/home" />
                <Route component={Project} path="/project" />
                <Route component={SingUp} path="/singup" />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;