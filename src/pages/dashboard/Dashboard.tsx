import React, { useEffect } from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import DoughnutChart from '../../components/doughnut-chart/DoughnutChart';
import { PiDotsThreeDuotone } from "react-icons/pi";
import DailySales from '../../components/daily-sales/DailySales';
import DiscountSales from '../../components/discount-sales/DiscountSales';
import MonthlySales from '../../components/monthly-sales/MonthlySales';
import MonthlyOrders from '../../components/monthly-orders/MonthlyOrders';
import MonthlyCustomers from '../../components/monthly-customers/MonthlyCustomers';
import DataTable from 'datatables.net-dt';
import useDropdownAndModalControl from '../../hooks/useDropdownAndModalControl';
import Modal from '../../components/modal/Modal';



const Dashboard: React.FC = () => {

    const { isOpen, toggle, dropdownRef, setIsOpen } = useDropdownAndModalControl();

    useEffect(() => {
        new DataTable('.tableItemWid');
    }, []);
    

    return (
        <>
        

            <div className="container-fluid mt-3">

                <div className="row mb-5">
                    <div className="col-md-5 d-flex align-items-center justify-content-start">
                        <h6 className="subtitle">Home - Dashboard</h6>
                    </div>

                    <div ref={dropdownRef} className="col-md-7 p-0 d-flex align-items-center justify-content-end gap-2">
                        <button className="btn btn-secondary btn-sm">Manage Seals</button>
                        <button onClick={toggle} className="btn btn-primary btn-sm">Create Product</button>

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
                
                <div className="row gap-5">
                    <div className="col rounded dashCard shadow py-4 px-5">
                        <div className="">
                            <h3 className="d-flex justify-content-start align-items-center">
                                <span className="symbol">$</span>
                                69,700 
                                <span className="badge text-bg-success res"><FaArrowTrendUp className="dashCardIcon" style={{fontSize:"13px"}}/>2.2%</span>
                            </h3>
                            <h6 className="subtitle">Expected Earnings</h6>
                        </div>

                        <div className="mt-4">
                            <div className="row d-flex justify-content-between align-items-center">
                                <div className="col-md-7">
                                    <DoughnutChart/>
                                </div>
                                
                                <div className="col-md-5">
                                    <ul className="p-0 m-0 text-end list-unstyled">
                                        <li className="amount mb-2">$7,660</li>
                                        <li className="amount mb-2">$7,660</li>
                                        <li className="amount">$7,660</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <DailySales/>
                </div>
                
                <div className="row gap-5 mt-5 mb-5">
                    <MonthlyOrders/>

                    <MonthlyCustomers/>
                </div>
                
                <div className="row mb-5">
                    <MonthlySales/>
                </div>

                <div className="row gap-5 mb-5">
                    <div className="col rounded dashCard shadow py-4 px-5">
                        <div className="">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="">
                                    <h5 className="mb-1">Sales This Months</h5>
                                </div>
                                <PiDotsThreeDuotone className="headerMenuItem" style={{fontSize:"23px"}}/>
                            </div>
                        </div>

                        <div className="mt-4 row gap-4 sliderCat pb-3">

                            <div className="col-3 rounded p-3 py-4 shadow catItem active d-flex align-items-center justify-content-center overflow-hidden">
                                <img className='mb-2' src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/products-categories/t-shirt.svg" alt="" />
                                <h6 className='m-0'>T-shirt</h6>
                            </div>

                            <div className="col-3 rounded p-3 py-4 shadow catItem d-flex align-items-center justify-content-center overflow-hidden">
                                <img className='mb-2' src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/products-categories/t-shirt.svg" alt="" />
                                <h6 className='m-0'>T-shirt</h6>
                            </div>

                            <div className="col-3 rounded p-3 py-4 shadow catItem d-flex align-items-center justify-content-center overflow-hidden">
                                <img className='mb-2' src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/products-categories/t-shirt.svg" alt="" />
                                <h6 className='m-0'>T-shirt</h6>
                            </div>

                            <div className="col-3 rounded p-3 py-4 shadow catItem d-flex align-items-center justify-content-center overflow-hidden">
                                <img className='mb-2' src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/products-categories/t-shirt.svg" alt="" />
                                <h6 className='m-0'>T-shirt</h6>
                            </div>

                        </div>

                        <div className="mt-5 overflow-hidden">
                            <div className="tableScroll pb-2">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ITEM</th>
                                            <th scope="col">QTY</th>
                                            <th scope="col">PRICE</th>
                                            <th scope="col">TOTAL PRICE</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td scope="row">
                                                <div className="d-flex align-items-center justify-content-start flex-row gap-3">
                                                    <img style={{width:'40px'}} src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/ecommerce/210.png" alt="" />
                                                    <div className="">
                                                        <h6 className="m-0">Elephant 1802</h6>
                                                        <span>Item: #XDG-2347</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <th className="pt-3">x1</th>
                                            <th className="pt-3">$72.00</th>
                                            <th className="pt-3">$126.00</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <DiscountSales/>
                </div>

                <div className="row gap-5 mb-5 lastProductOrderTableWrap">
                    <div className="col-4 firstBlockofLastProductOrderTableWrap rounded dashCard shadow py-4 px-5">
                        <div className="">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="">
                                    <h5 className="mb-1">Product Delivery</h5>
                                    <h6 className="subtitle">1M Products Shipped so far</h6>
                                </div>
                            </div>

                            <button className="btn btn-light btn-sm mb-3">Order Details</button>
                        </div>

                        <div className="mt-4 row gap-4 orderCardScroll">

                            <div style={{marginLeft: "10px"}} className="col-12 rounded p-2 px-3 secondItem active">
                                <div className="d-flex align-items-center justify-content-between">
                                    <a href="/" className="linkButSimpleText">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <img  style={{width:'40px'}} src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/ecommerce/210.png" alt="" />
                                            <h6 className='m-0'>Elephant 1802</h6>
                                        </div>
                                    </a>

                                    <PiDotsThreeDuotone className="headerMenuItem" style={{fontSize:"23px"}}/>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <h6><span>To: </span> <a href="/" className="linkButSimpleText">Jason Bourne</a></h6>
                                    <span className="badge text-bg-success orderBadge">Delivered</span>
                                </div>
                            </div>

                            <div style={{marginLeft: "10px"}} className="col-12 rounded p-2 px-3 secondItem active">
                                <div className="d-flex align-items-center justify-content-between">
                                    <a href="/" className="linkButSimpleText">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <img  style={{width:'40px'}} src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/ecommerce/210.png" alt="" />
                                            <h6 className='m-0'>Elephant 1802</h6>
                                        </div>
                                    </a>

                                    <PiDotsThreeDuotone className="headerMenuItem" style={{fontSize:"23px"}}/>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <h6><span>To: </span> <a href="/" className="linkButSimpleText">Jason Bourne</a></h6>
                                    <span className="badge text-bg-danger orderBadge">Confirmed</span>
                                </div>
                            </div>

                            <div style={{marginLeft: "10px"}} className="col-12 rounded p-2 px-3 secondItem active">
                                <div className="d-flex align-items-center justify-content-between">
                                    <a href="/" className="linkButSimpleText">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <img  style={{width:'40px'}} src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/ecommerce/210.png" alt="" />
                                            <h6 className='m-0'>Elephant 1802</h6>
                                        </div>
                                    </a>

                                    <PiDotsThreeDuotone className="headerMenuItem" style={{fontSize:"23px"}}/>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <h6><span>To: </span> <a href="/" className="linkButSimpleText">Jason Bourne</a></h6>
                                    <span className="badge text-bg-primary orderBadge">Shipping</span>
                                </div>
                            </div>

                            <div style={{marginLeft: "10px"}} className="col-12 rounded p-2 px-3 secondItem active">
                                <div className="d-flex align-items-center justify-content-between">
                                    <a href="/" className="linkButSimpleText">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <img  style={{width:'40px'}} src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/ecommerce/210.png" alt="" />
                                            <h6 className='m-0'>Elephant 1802</h6>
                                        </div>
                                    </a>

                                    <PiDotsThreeDuotone className="headerMenuItem" style={{fontSize:"23px"}}/>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <h6><span>To: </span> <a href="/" className="linkButSimpleText">Jason Bourne</a></h6>
                                    <span className="badge text-bg-primary orderBadge">Shipping</span>
                                </div>
                            </div>

                        </div>
                    </div>

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
                                    <table className="table mb-0 tableItemWid mb-3 mt-4">
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
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
                                                <td>78 PCS</td>
                                            </tr>

                                            <tr>
                                                <th scope="row" style={{color: "#1B84FF",fontWeight:"normal"}}>HP Hyper LTR</th>
                                                <td>#PXF-778</td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-primary orderBadge">In stock</span></td>
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

export default Dashboard;
