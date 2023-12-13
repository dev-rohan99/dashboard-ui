import React from 'react';
import PublicGard from './PublicGard';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';

interface Route {
    path?: string;
    element: React.ReactNode;
}

interface NestedRoute extends Route {
    children?: Route[];
}

const PublicRouter: NestedRoute[] = [
    {
        element: <PublicGard/>,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
        ]
    }
]

export default PublicRouter;
