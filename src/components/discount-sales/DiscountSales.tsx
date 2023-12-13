import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6';
import { PiDotsThreeDuotone } from 'react-icons/pi';
import LineChart from '../line-chart/LineChart';

const DiscountSales: React.FC = () => {



    return (
        <>
        
        
            <div className="col rounded dashCard shadow py-4 px-5">
                <div className="">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="">
                            <h5 className="mb-1">Discounted Product Sales</h5>
                            <h6 className="subtitle">Users from all channels</h6>
                        </div>
                        <PiDotsThreeDuotone className="headerMenuItem" style={{fontSize:"23px"}}/>
                    </div>

                    <h3 className="d-flex justify-content-start align-items-center mt-4">
                        <span className="symbol">$</span>
                        100,700 
                        <span className="badge text-bg-success res"><FaArrowTrendUp className="dashCardIcon" style={{fontSize:"13px"}}/>2.6%</span>
                    </h3>
                    <h6 className="subtitle">Average Daily Sales</h6>
                </div>

                <div className="mt-4">
                    <LineChart Labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']} Label={'Sales This Months'} Data={[65, 59, 80, 81, 56, 55, 40]} BackgroundColor={"#DAE7F9"} BorderColor={'#1D81F9'} Hei={200}/>
                </div>
            </div>
        
        
        </>
    )
}

export default DiscountSales;
