import React from 'react';
import DashboardLayout from '../components/dashboard-layout/DashboardLayout';
import PrivateGard from './PrivateGard';
import Dashboard from '../pages/dashboard/Dashboard';
import Inbox from '../pages/inbox/Inbox';
import Suppliers from '../pages/suppliers/Suppliers';
import Orders from '../pages/orders/Orders';
import Invoices from '../pages/invoices/Invoices';
import Customers from '../pages/customers/Customers';
import Products from '../pages/products/Products';
import Sales from '../pages/sales/Sales';
import Profile from '../pages/profile/Profile';

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

const PrivateRouter: NestedRouteTwo[] = [
    {
        element: <DashboardLayout/>,
        children: [{
            element: <PrivateGard/>,
            children: [
                {
                    path: "/",
                    element: <Dashboard />
                },
                {
                    path: "/inbox",
                    element: <Inbox />
                },
                {
                    path: "/suppliers",
                    element: <Suppliers />
                },
                {
                    path: "/orders",
                    element: <Orders />
                },
                {
                    path: "/products",
                    element: <Products />
                },
                {
                    path: "/customers",
                    element: <Customers />
                },
                {
                    path: "/invoices",
                    element: <Invoices />
                },
                {
                    path: "/sales",
                    element: <Sales />
                },
                {
                    path: "/profile",
                    element: <Profile />
                },
            ]
        }]
    }
]

export default PrivateRouter;
