import React from 'react';
import DashboardLayout from '../components/dashboard-layout/DashboardLayout';
import ComingSoon from '../pages/coming-soon/ComingSoon';

interface Route {
    path?: string;
    element: React.ReactNode;
}

interface NestedRoute extends Route {
    children?: Route[];
}

interface NestedRouteTwo extends Route {
    children?: NestedRoute[];
}

const AccessableRouter: NestedRouteTwo[] = [
    {
        element: <DashboardLayout/>,
        children: [
            {
                path: "/coming-soon",
                element: <ComingSoon />
            }
        ]
    }
]

export default AccessableRouter;
