import DataTable from 'datatables.net-dt';
import React, { useEffect } from 'react'
import { FaEye, FaTrashAlt, FaUserEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Brands: React.FC = () => {


    useEffect(() => {
        new DataTable('.tableItemWid');
    }, []);


    return (
      <>
      
      
      <div className="container-fluid mt-3">

                <div className="row mb-5">
                    <div className="col-md-5 d-flex align-items-center justify-content-start">
                        <h6 className="subtitle">Home - Brands</h6>
                    </div>
                </div>

                <div className="row mb-5 lastProductOrderTableWrap">
                    <div className="col overflow-hidden rounded dashCard shadow py-4 px-5">

                        <div className="mt-5">
                            <div className="pb-2">
                                <div className="table-responsive tableScrollTwo p-3 bg-white">
                                    <table className="table mb-0 tableItemWidTwoo mb-3 mt-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">LOGO</th>
                                                <th scope="col">NAME</th>
                                                <th scope="col">PRODUCTS</th>
                                                <th scope="col">DATE ADDED</th>
                                                <th scope="col">STATUS</th>
                                                <th scope="col">ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>
                                                    <Link to="/profile" className="d-block">
                                                      <img className="productImage" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg" alt="" />
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to="/profile" className="d-block">
                                                        <h6 className="detailstext m-0">ESHOP</h6>
                                                    </Link>
                                                </td>
                                                <td>10 PRODUCT</td>
                                                <td>16 Jan, 2023</td>
                                                <td><span className="badge text-bg-success orderBadge">Approved</span></td>
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

export default Brands