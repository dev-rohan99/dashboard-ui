import React from 'react';
import DashboardLayout from '../components/dashboard-layout/DashboardLayout';
import PrivateGard from './PrivateGard';
import Dashboard from '../pages/dashboard/Dashboard';
import Analytic from '../pages/analytic/Analytic';
import Suppliers from '../pages/suppliers/Suppliers';
import Orders from '../pages/orders/Orders';
import Invoices from '../pages/invoices/Invoices';
import Customers from '../pages/customers/Customers';
import Products from '../pages/products/Products';
import Sales from '../pages/sales/Sales';

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
                    path: "/analytic",
                    element: <Analytic />
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
            ]
        }]
    }
]

export default PrivateRouter;
