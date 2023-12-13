import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';
import BarChart from '../bar-chart/BarChart';

const DailySales: React.FC = () => {



    return (
        <>
        
        
            <div className="col rounded dashCard shadow py-4 px-5">
                <div className="">
                    <h3 className="d-flex justify-content-start align-items-center">
                        <span className="symbol">$</span>
                        100,700 
                        <span className="badge text-bg-success res"><FaArrowTrendUp className="dashCardIcon" style={{fontSize:"13px"}}/>2.6%</span>
                    </h3>
                    <h6 className="subtitle">Average Daily Sales</h6>
                </div>

                <div className="mt-4">
                    <BarChart/>
                </div>
            </div>
        
        
        </>
    )
}

export default DailySales;
