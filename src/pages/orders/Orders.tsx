import React from 'react';
import MonthlyOrders from '../../components/monthly-orders/MonthlyOrders';
import MonthlyCustomers from '../../components/monthly-customers/MonthlyCustomers';
import { FaArrowTrendUp } from 'react-icons/fa6';


const Orders: React.FC = () => {



    return (
        <>
        
        
            <div className="container-fluid mt-3">
                
                <div className="row gap-5 mt-5 mb-5">
                    <MonthlyOrders/>

                    <MonthlyCustomers/>
                </div>
            
            
                <div className="row mb-5 lastProductOrderTableWrap">
                    <div className="col overflow-hidden rounded dashCard shadow py-4 px-5">
                        <div className="">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="">
                                    <h5 className="mb-1">Stock Report</h5>
                                    <h6 className="subtitle">Total 2,356 Items in the Stock</h6>
                                </div>
                            </div>

                            <h3 className="d-flex justify-content-start align-items-center mt-4">
                                <span className="symbol">$</span>
                                100,700 
                                <span className="badge text-bg-success res"><FaArrowTrendUp className="dashCardIcon" style={{fontSize:"13px"}}/>2.6%</span>
                            </h3>
                            <h6 className="subtitle">Average Daily Sales</h6>
                        </div>

                        <div className="mt-5">
                            <div className="pb-2">
                                <div className="table-responsive tableScrollTwo p-3 bg-white">
                                    <table className="table mb-0 tableItemWid w-100">
                                        <thead>
                                            <tr>
                                                <th scope="col">ITEM</th>
                                                <th scope="col">PRODUCT ID</th>
                                                <th scope="col">DATE ADDED</th>
                                                <th scope="col">PRICE</th>
                                                <th scope="col">STATUS</th>
                                                <th scope="col">QTY</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-danger orderBadge">Cancel</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-success orderBadge">Delivered</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-success orderBadge">Delivered</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-success orderBadge">Delivered</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-success orderBadge">Delivered</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-success orderBadge">Delivered</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-success orderBadge">Delivered</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-success orderBadge">Delivered</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-success orderBadge">Delivered</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        
        </>
    )
}

export default Orders;
