import React from 'react';
import { FaArrowTrendDown } from 'react-icons/fa6';


const MonthlyOrders: React.FC = () => {



    return (
        <>
        
        
            <div className="col rounded dashCard shadow py-4 px-5">
                <div className="">
                    <h3 className="d-flex justify-content-start align-items-center">
                        1,836
                        <span className="badge text-bg-danger resDanger"><FaArrowTrendDown className="dashCardIconDan" style={{fontSize:"13px"}}/>1.2%</span>
                    </h3>
                    <h6 className="subtitle">Orders This Month</h6>
                </div>

                <div className="mt-5">
                    <h6 className="d-flex align-items-center justify-content-between font-weight-bold">1,048 to Goal <span className="persentage">62%</span></h6>

                    <div className="progressBar mt-3">
                        <div className="progressBarFill">

                        </div>
                    </div>
                </div>
            </div>

        
        </>
    )
}

export default MonthlyOrders;
