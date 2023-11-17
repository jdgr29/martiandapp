import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({
  up,
  down,
  expanded,
}: {
  up?: boolean;
  down?: boolean;
  expanded: boolean;
}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: expanded,
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
    plugins: {
      legend: {
        display: false,
      },
    },
    datasets: [
      {
        label: "Crypto payments",
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: "#39FF14",
      },
      {
        label: "Fiat Payments",
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: "#CF9016",
      },
    ],
  };
  return (
    <div
      className={`${expanded ? "h-[400px]" : "h-[245px]"} ${
        expanded ? "w-[100%]" : "w-[245px]"
      } p-4 rounded  flex flex-col items-center justify-between bg-[#0F0F13]`}
    >
      <header className="flex justify-between gap-x-6 items-center">
        <div className="flex flex-col items-start">
          <p className="text-2xl">45</p>
          <p className="text-[gray]">new orders</p>
        </div>
        <div className="flex flex-col  items-end">
          <p>Icon</p>
          <p className="text-[green]">+23%</p>
          <p className="text-[gray] text-xs">(via last week)</p>
        </div>
      </header>
      <Bar options={options} data={data} />
    </div>
  );
};
