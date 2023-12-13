import React from 'react'
import DailySales from '../../components/daily-sales/DailySales';
import DiscountSales from '../../components/discount-sales/DiscountSales';
import MonthlySales from '../../components/monthly-sales/MonthlySales';

const Sales: React.FC = () => {



    return (
        <>
        
        
            <div className="container-fluid mt-5">

                <div className="row gap-5">

                    <DailySales/>

                    <DiscountSales/>

                </div>

                <div className="row mb-5 mt-5">
                    <MonthlySales/>
                </div>

            </div>
        
        
        </>
    )
}

export default Sales;
