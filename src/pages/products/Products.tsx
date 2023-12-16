import DataTable from 'datatables.net-dt';
import React, { useEffect } from 'react';
import { FaEye, FaTrashAlt, FaUserEdit } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import Modal from '../../components/modal/Modal';
import useDropdownAndModalControl from '../../hooks/useDropdownAndModalControl';


const Products: React.FC = () => {

    const { isOpen, toggle, dropdownRef, setIsOpen } = useDropdownAndModalControl();

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

                    <div ref={dropdownRef} className="col-md-7 p-0 d-flex align-items-center justify-content-end gap-2 position-relative">
                        <button className="btn btn-secondary btn-sm">Manage Products</button>
                        <button onClick={toggle} className="btn btn-primary btn-sm">
                            Create Products
                        </button>

                        {isOpen && <Modal title="Create Product" setIsOpen={setIsOpen}>
                            <form>
                                <div className="form-floating">
                                    <input type="text" className="form-control mb-3" placeholder="Product Name" />
                                    <label className="d-flex align-items-center" htmlFor="floatingTextarea">Product Name</label>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-floating">
                                            <input type="text" className="form-control mb-3" placeholder="Product Price" />
                                            <label className="d-flex align-items-center" htmlFor="floatingTextarea">Product Price</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <input type="file" className="form-control " placeholder="Product Photos" style={{padding:"1rem 1rem"}} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <select className="form-control mb-3" style={{padding:"1rem 1rem"}}>
                                            <option value="" selected>Select Category</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>


                                    <div className="col">
                                        <select className="form-control mb-3" style={{padding:"1rem 1rem"}}>
                                            <option value="" selected>Select Product Type</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-floating">
                                    <textarea className="form-control mb-3 pt-4" placeholder="Short Description" id="floatingTextarea2" style={{height: "100px"}} />
                                    <label className="d-flex" htmlFor="floatingTextarea2">Short Description</label>
                                </div>

                                <div className="form-floating">
                                    <textarea className="form-control mb-3 pt-4" placeholder="Short Description" id="floatingTextarea2" style={{height: "100px"}} />
                                    <label className="d-flex" htmlFor="floatingTextarea2">Long Description</label>
                                </div>

                                <button className="btn btn-primary w-100">Create Product</button>
                            </form>
                        </Modal>}
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
