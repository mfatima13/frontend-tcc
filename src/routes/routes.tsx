import React from 'react';
import {
    Route as ReactRoute,
    RouteProps as ReactRouteProps,
    Redirect,
} from 'react-router-dom';

import { useAuth } from '../contexts/auth';

interface RouteProps extends ReactRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const { signed } = useAuth();

    return (
        <ReactRoute
            {...rest}
            render={({ location }) => {
                return isPrivate === signed ? (
                    <Component />
                ) : (
                        <Redirect to={{
                            pathname: isPrivate ?
                                '/' : '/home', state:
                                { from: location },
                        }} />
                    );
            }}
        />
    )
}

export default Route;