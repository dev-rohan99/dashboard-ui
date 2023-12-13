import React from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Line } from 'react-chartjs-2';

interface LineChartProps {
  Labels: string[];
  Label: string;
  Data: number[];
  BackgroundColor: string;
  BorderColor: string;
  Hei: number;
}

const LineChart: React.FC<LineChartProps> = ({ Labels, Label, Data, BackgroundColor, BorderColor, Hei }) => {

    const lebelsData = Labels;
    const data = {
      labels: lebelsData,
      datasets: [{
        label: Label,
        data: Data,
        fill: true,
        backgroundColor: BackgroundColor,
        borderColor: BorderColor,
        tension: 0.1,
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
        plugins: {
          legend: {
            display: true,
          },
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
          },
        },
        responsive: true,
        maintainAspectRatio: false
      };

    return (
        <>
        
        
            <Line
                data={data}
                options={options}
                height={Hei}
            />
        
        
        </>
    )
}

export default LineChart