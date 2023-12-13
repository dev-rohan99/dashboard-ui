import React from 'react';
import { FaEye, FaTrashAlt, FaUserEdit } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';


const Suppliers: React.FC = () => {



    return (
        <>
        
        
            <div className="container-fluid mt-3">

                <div className="row mb-5">
                    <div className="col-md-5 d-flex align-items-center justify-content-start">
                        <h6 className="subtitle">Home - Suppliers</h6>
                    </div>

                    <div className="col-md-7 p-0 d-flex align-items-center justify-content-end gap-2">
                        <button className="btn btn-secondary btn-sm">Manage Suppliers</button>
                        <button className="btn btn-primary btn-sm">Add Supplier</button>
                    </div>
                </div>    
            
                <div className="row mb-5 lastProductOrderTableWrap">
                    <div className="col overflow-hidden rounded dashCard shadow py-4 px-5">
                        <div className="">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="">
                                    <h5 className="mb-1">Suppliers Report</h5>
                                    <h6 className="subtitle">Total 499 Suppliers</h6>
                                </div>
                            </div>

                            <h3 className="d-flex justify-content-start align-items-center mt-4">
                                1101,700 
                                <span className="badge text-bg-success res"><FaArrowTrendUp className="dashCardIcon" style={{fontSize:"13px"}}/>1.6%</span>
                            </h3>
                            <h6 className="subtitle">Average Delivery from Suppliers</h6>
                        </div>

                        <div className="mt-5">
                            <div className="pb-2">
                                <div className="table-responsive tableScrollTwo p-3 bg-white">
                                    <table className="table mb-0 tableItemWid w-100">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">USER ID</th>
                                                <th scope="col">DATE ADDED</th>
                                                <th scope="col">ORDER AMOUNT</th>
                                                <th scope="col">STATUS</th>
                                                <th scope="col">Orders</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>Rohim Sheikh</th>
                                                <td>PXFDFG-778FRGG</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-danger orderBadge">Banned</span></td>
                                                <td>78 PCS</td>
                                                <td className="d-flex justify-content-start gap-1">
                                                    <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>Rohima Begum</th>
                                                <td>PXFDFG-778FRGG</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$20000</td>
                                                <td><span className="badge text-bg-success orderBadge">Customer</span></td>
                                                <td>78 PCS</td>
                                                <td className="d-flex justify-content-start gap-1">
                                                    <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>Rohima Begum</th>
                                                <td>PXFDFG-778FRGG</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$20000</td>
                                                <td><span className="badge text-bg-success orderBadge">Customer</span></td>
                                                <td>78 PCS</td>
                                                <td className="d-flex justify-content-start gap-1">
                                                    <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>Rohima Begum</th>
                                                <td>PXFDFG-778FRGG</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$20000</td>
                                                <td><span className="badge text-bg-success orderBadge">Customer</span></td>
                                                <td>78 PCS</td>
                                                <td className="d-flex justify-content-start gap-1">
                                                    <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>Rohima Begum</th>
                                                <td>PXFDFG-778FRGG</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$20000</td>
                                                <td><span className="badge text-bg-success orderBadge">Customer</span></td>
                                                <td>78 PCS</td>
                                                <td className="d-flex justify-content-start gap-1">
                                                    <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>Rohima Begum</th>
                                                <td>PXFDFG-778FRGG</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$20000</td>
                                                <td><span className="badge text-bg-success orderBadge">Customer</span></td>
                                                <td>78 PCS</td>
                                                <td className="d-flex justify-content-start gap-1">
                                                    <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>Rohima Begum</th>
                                                <td>PXFDFG-778FRGG</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$20000</td>
                                                <td><span className="badge text-bg-success orderBadge">Customer</span></td>
                                                <td>78 PCS</td>
                                                <td className="d-flex justify-content-start gap-1">
                                                    <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>Rohima Begum</th>
                                                <td>PXFDFG-778FRGG</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$20000</td>
                                                <td><span className="badge text-bg-success orderBadge">Customer</span></td>
                                                <td>78 PCS</td>
                                                <td className="d-flex justify-content-start gap-1">
                                                    <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>Rohima Begum</th>
                                                <td>PXFDFG-778FRGG</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$20000</td>
                                                <td><span className="badge text-bg-success orderBadge">Customer</span></td>
                                                <td>78 PCS</td>
                                                <td className="d-flex justify-content-start gap-1">
                                                    <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>Rohima Begum</th>
                                                <td>PXFDFG-778FRGG</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$20000</td>
                                                <td><span className="badge text-bg-success orderBadge">Customer</span></td>
                                                <td>78 PCS</td>
                                                <td className="d-flex justify-content-start gap-1">
                                                    <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>Rohima Begum</th>
                                                <td>PXFDFG-778FRGG</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$20000</td>
                                                <td><span className="badge text-bg-success orderBadge">Customer</span></td>
                                                <td>78 PCS</td>
                                                <td className="d-flex justify-content-start gap-1">
                                                    <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>Rohima Begum</th>
                                                <td>PXFDFG-778FRGG</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$20000</td>
                                                <td><span className="badge text-bg-success orderBadge">Customer</span></td>
                                                <td>78 PCS</td>
                                                <td className="d-flex justify-content-start gap-1">
                                                    <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                    <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                </td>
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

export default Suppliers;
