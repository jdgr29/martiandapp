import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data = {
    labels: ["Tickets Sold", "Tickets"],

    datasets: [
      {
        label: "# of Votes",
        data: [50, 50],
        backgroundColor: ["#0071BC", "#CF9016"],
      },
    ],
  };
  return <Doughnut options={options} data={data} />;
};
