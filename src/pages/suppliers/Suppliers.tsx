import React, { useEffect } from 'react';
import { FaEye, FaTrashAlt, FaUserEdit } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import DataTable from 'datatables.net-dt';
import Modal from '../../components/modal/Modal';
import useDropdownAndModalControl from '../../hooks/useDropdownAndModalControl';


const Suppliers: React.FC = () => {

    const { isOpen, toggle, dropdownRef, setIsOpen } = useDropdownAndModalControl();

    useEffect(() => {
        new DataTable('.tableItemWid');
    }, []);

    return (
        <>
        
        
            <div className="container-fluid mt-3">

                <div className="row mb-5">
                    <div className="col-md-5 d-flex align-items-center justify-content-start">
                        <h6 className="subtitle">Home - Suppliers</h6>
                    </div>

                    <div ref={dropdownRef} className="col-md-7 p-0 d-flex align-items-center justify-content-end gap-2">
                        <button className="btn btn-secondary btn-sm">Manage Suppliers</button>
                        <button onClick={toggle} className="btn btn-primary btn-sm">Add Supplier</button>

                        {isOpen && <Modal title="Create Customer" setIsOpen={setIsOpen}>
                            <form>
                                <div className="form-floating">
                                    <input type="text" className="form-control mb-3" placeholder="Product Name" />
                                    <label className="d-flex align-items-center" htmlFor="floatingTextarea">Name</label>
                                </div>

                                <div className="form-floating">
                                    <input type="email" className="form-control mb-3" placeholder="Email Address" />
                                    <label className="d-flex align-items-center" htmlFor="floatingTextarea">Email Address</label>
                                </div>

                                <div className="form-floating">
                                    <input type="password" className="form-control mb-3" placeholder="Password" />
                                    <label className="d-flex align-items-center" htmlFor="floatingTextarea">Password</label>
                                </div>

                                <button className="btn btn-primary w-100">Create Supplier</button>
                            </form>
                        </Modal>}
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
                                    <table className="table mb-0 tableItemWid mb-3 mt-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">USER ID</th>
                                                <th scope="col">DATE ADDED</th>
                                                <th scope="col">TOTAL AMOUNT DELIVERY</th>
                                                <th scope="col">STATUS</th>
                                                <th scope="col">TOTAL DELIVERY QTY</th>
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
                                                <td><span className="badge text-bg-success orderBadge">Supplier</span></td>
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
                                                <td><span className="badge text-bg-success orderBadge">Supplier</span></td>
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
                                                <td><span className="badge text-bg-success orderBadge">Supplier</span></td>
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
                                                <td><span className="badge text-bg-success orderBadge">Supplier</span></td>
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
                                                <td><span className="badge text-bg-success orderBadge">Supplier</span></td>
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
                                                <td><span className="badge text-bg-success orderBadge">Supplier</span></td>
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
                                                <td><span className="badge text-bg-success orderBadge">Supplier</span></td>
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
                                                <td><span className="badge text-bg-success orderBadge">Supplier</span></td>
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
