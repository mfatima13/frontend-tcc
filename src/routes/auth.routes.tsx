import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import SingUp from '../pages/SingUp';

import { useAuth } from '../contexts/auth';

const AuthRoutes: React.FC = () => {

    const isAuthenticated = useAuth();
    
    console.log("entrou auth");
    return (
        <Switch>
            <Route component={Login} path="/" exact />
            <Route component={SingUp} path="/singup" />
        </Switch>
    );
}

export default AuthRoutes;