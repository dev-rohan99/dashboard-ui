import React from 'react'
import LineChart from '../line-chart/LineChart'
import { PiDotsThreeDuotone } from 'react-icons/pi'
import { FaArrowTrendUp } from 'react-icons/fa6'

const MonthlySales: React.FC = () => {



    return (
        <>
        
        
            <div className="col rounded dashCard shadow py-4 px-5">
                <div className="">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="">
                            <h5 className="mb-1">Sales This Months</h5>
                            <h6 className="subtitle">Sales This Months</h6>
                        </div>
                        <PiDotsThreeDuotone className="headerMenuItem" style={{fontSize:"23px"}}/>
                    </div>

                    <h3 className="d-flex justify-content-start align-items-center">
                        <span className="symbol">$</span>
                        59,700 
                        <span className="badge text-bg-success res"><FaArrowTrendUp className="dashCardIcon" style={{fontSize:"13px"}}/>2.2%</span>
                    </h3>
                    <h6 className="subtitle">Another $48,346 to Goal</h6>
                </div>

                <div className="mt-5">
                    <LineChart Labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']} Label={'Sales This Months'} Data={[65, 59, 80, 81, 56, 55, 40]} BackgroundColor={"#DFFFEA"} BorderColor={'#17C653'} Hei={300}/>
                </div>
            </div>
        
        
        </>
    )
}

export default MonthlySales