import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const TicketSalesChart = ({
  expanded,
  collectableData,
  ticketData,
}: {
  expanded: boolean;
  collectableData?: {}[];
  ticketData?: {}[];
}) => {
  const options = {
    responsive: true,
    elements: {
      line: {
        tension: 0.4,
        fill: false,
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        ticks: {
          display: expanded,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        border: {
          display: false,
        },
        ticks: {
          display: expanded,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      // title: {
      //   display: true,
      //   text: "Chart.js Line Chart",
      // },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        borderColor: " #39FF14",
        backgroundColor: " #39FF14",
      },
      {
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        borderColor: "#CF9016",
        backgroundColor: "#CF9016",
      },
    ],
  };

  return <Line options={options} data={data} />;
};
