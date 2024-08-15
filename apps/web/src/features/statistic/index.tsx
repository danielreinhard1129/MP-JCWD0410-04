import React from 'react'
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';

const StatisticPage = () => {
  const data = {
    labels: [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ],
    datasets: [
      {
        label: "Brutto",
        borderRadius: 30,
        data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3, 0.4],
        backgroundColor: "rgba(32, 214, 155, 1)",
        barThickness: 10,
      },
      {
        label: "Netto",
        borderRadius: 20,
        data: [0.07, 0.3, 0.15, 0.2, 0.5, 0.3, 0.8, 0.2, 0.4],
        backgroundColor: "rgba(1, 98, 255, 1)",
        barThickness: 10,
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: "circle",
        },
        title: "",
      }
    }
  }

  // new Chart(
  //   document.getElementById('acquisitions'),
  //   {
  //     type: 'bar',
  //     data: {
  //       labels: data.map(row => row.year),
  //       datasets: [
  //         {
  //           label: 'Acquisitions by year',
  //           data: data.map(row => row.count)
  //         }
  //       ]
  //     }
  //   }
  // );
  return (
    <div>
      StatisticPage
      <Bar data={data} height={300} />
    </div>
  )
}

export default StatisticPage