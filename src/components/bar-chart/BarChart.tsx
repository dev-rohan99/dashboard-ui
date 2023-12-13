import React from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Bar } from 'react-chartjs-2';


const BarChart: React.FC = () => {

    const labels = ['January', 'February', 'March', 'April'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Average Daily Sales',
            data: [10000, 30000, 7000, 15000],
            backgroundColor: [
            '#1B84FF',
            '#1B84FF',
            '#1B84FF',
            '#1B84FF'
            ],
            borderWidth: 1,
            borderRadius: 10
        }]
    };

    const options = {
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <>
        
        
            <Bar 
                data={data}
                options={options}
                width={400} 
                height={200}
            />
        
        
        </>
    )
}

export default BarChart;
