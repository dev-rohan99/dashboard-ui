import DataTable from 'datatables.net-dt';
import React, { useEffect } from 'react';
import { FaEye, FaTrashAlt, FaUserEdit } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';


const Products: React.FC = () => {

    useEffect(() => {
        new DataTable('.tableItemWid');
    }, []);

    return (
        <>
        
        
            <div className="container-fluid mt-3">

                <div className="row mb-5">
                    <div className="col-md-5 d-flex align-items-center justify-content-start">
                        <h6 className="subtitle">Home - Products</h6>
                    </div>

                    <div className="col-md-7 p-0 d-flex align-items-center justify-content-end gap-2">
                        <button className="btn btn-secondary btn-sm">Manage Products</button>
                        <button className="btn btn-primary btn-sm">Add Products</button>
                    </div>
                </div>    

                <div className="row mb-5 lastProductOrderTableWrap">
                    <div className="col overflow-hidden rounded dashCard shadow py-4 px-5">
                        <div className="">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="">
                                    <h5 className="mb-1">Products Report</h5>
                                    <h6 className="subtitle">Total 100000 Products</h6>
                                </div>
                            </div>

                            <h3 className="d-flex justify-content-start align-items-center mt-4">
                                <span className="symbol">$</span>
                                1101,700 
                                <span className="badge text-bg-success res"><FaArrowTrendUp className="dashCardIcon" style={{fontSize:"13px"}}/>1.6%</span>
                            </h3>
                            <h6 className="subtitle">Average sales from various products</h6>
                        </div>

                        <div className="mt-5">
                            <div className="pb-2">
                                <div className="table-responsive tableScrollTwo p-3 bg-white">
                                    <table className="table mb-0 tableItemWid mb-3 mt-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">PRODUCT</th>
                                                <th scope="col">DATE ADDED</th>
                                                <th scope="col">STATUS</th>
                                                <th scope="col">SALES</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>
                                                    <a href="/" className="">
                                                        <div className="d-flex justify-content-start align-items-center productWrapper">
                                                            <img className="productImage" src="https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="" />
                                                            <div className="productText">
                                                                <h6>For Airdods 2 i12 i11 buds air inpods 12 Protective Cover (only cover)</h6>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>16 Jan, 2023</td>
                                                <td><span className="badge text-bg-danger orderBadge">Banned</span></td>
                                                <td>78 PCS</td>
                                                <td className="">
                                                    <div className="d-flex justify-content-start gap-1">        
                                                        <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                        <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                        <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <a href="/" className="">
                                                        <div className="d-flex justify-content-start align-items-center productWrapper">
                                                            <img className="productImage" src="https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="" />
                                                            <div className="productText">
                                                                <h6>For Airdods 2 i12 i11 buds air inpods 12 Protective Cover (only cover)</h6>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>16 Jan, 2023</td>
                                                <td><span className="badge text-bg-success orderBadge">Active</span></td>
                                                <td>78 PCS</td>
                                                <td className="">
                                                    <div className="d-flex justify-content-start gap-1">        
                                                        <button className="btn btn-info btn-sm d-flex text-white p-1 justify-content-center align-items-center"><FaEye style={{fontSize:"15px"}}/></button>

                                                        <button className="btn btn-secondary btn-sm d-flex p-1 justify-content-center align-items-center"><FaUserEdit style={{fontSize:"15px"}}/></button>

                                                        <button className="btn btn-danger btn-sm d-flex p-1 justify-content-center align-items-center"><FaTrashAlt style={{fontSize:"15px"}}/></button>
                                                    </div>
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

export default Products;
