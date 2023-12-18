import DataTable from 'datatables.net-dt';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Transactions: React.FC = () => {

    useEffect(() => {
        new DataTable('.tableItemWid');
    }, []);

    return (
        <>
        

            <div className="container-fluid mt-3">

                <div className="row mb-5">
                    <div className="col-md-5 d-flex align-items-center justify-content-start">
                        <h6 className="subtitle">Home - Transactions</h6>
                    </div>
                </div>

                <div className="row mb-5 lastProductOrderTableWrap">
                    <div className="col overflow-hidden rounded dashCard shadow py-4 px-5">

                        <div className="mt-5">
                            <div className="pb-2">
                                <div className="table-responsive tableScrollTwo p-3 bg-white">
                                    <table className="table mb-0 tableItemWid mb-3 mt-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">Customer</th>
                                                <th scope="col">PRODUCT</th>
                                                <th scope="col">DATE ADDED</th>
                                                <th scope="col">PRICE</th>
                                                <th scope="col">STATUS</th>
                                                <th scope="col">QTY</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>
                                                    <Link to="/invoice/5454564" className="d-block">
                                                        <div className="d-flex justify-content-start align-items-center productWrapper2">
                                                            <img className="productImage" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg" alt="" />
                                                            <div className="productText">
                                                                <h6 className="m-0">Rohan Mostofa Abir</h6>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to="/invoice/5454564" className="d-block">
                                                        <div className="d-flex justify-content-start align-items-center productWrapper2">
                                                            <img className="productImage" src="https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="" />
                                                            <div className="productText">
                                                                <h6 className="detailstext m-0">For Airdods 2 i12 i11 buds air inpods 12 Protective Cover (only cover)</h6>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td>16 Jan, 2023</td>
                                                <td>$4500</td>
                                                <td><span className="badge text-bg-success orderBadge">Paid</span></td>
                                                <td>10 PCS</td>
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

export default Transactions;
