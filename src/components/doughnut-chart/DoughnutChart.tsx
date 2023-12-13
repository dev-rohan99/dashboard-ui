import React from 'react';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
import { Doughnut } from 'react-chartjs-2';


const DoughnutChart: React.FC = () => {

    const data = {
        labels: ['Shoes', 'Gaming', 'Others'],
        datasets: [
            {
                label: 'Expected Earnings',
                data: [30, 40, 30],
                backgroundColor: ['#F8285A', '#1B84FF', '#E4E6EF'],
                hoverOffset: 3,
            },
        ],
    };

    return (
        <>
        
        
            <Doughnut width={400} height={400} data={data} />
        
        
        </>
    )
}

export default DoughnutChart;
