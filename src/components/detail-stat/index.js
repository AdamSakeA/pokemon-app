import React from "react";
import { Container } from "./detailStat.styles";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function DetailStat({ stats }) {
  const baseStat = stats?.map((item) => item.base_stat);
  const dataSet = {
    labels: ["HP", "ATK", "DEF", "SPCL ATK", "SPCL DEF", "SPEED"],
    datasets: [
      {
        label: "Stats",
        data: baseStat,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 70, 99, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {},
        grid: {},
        ticks: {
          display: false,
        },
        beginAtZero: true,
        suggestedMax: 140,
        pointLabels: {
          font: {
            weight: "bold",
          },
        },
      },
    },
    elements: {
      radar: {
        backgroundColor: "#9BD0F5",
        fill: true,
      },
    },
  };

  return (
    <Container>
      <h1>Stats</h1>
      <Radar className="chart-container" data={dataSet} options={options} />
    </Container>
  );
}
