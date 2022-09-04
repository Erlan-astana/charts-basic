import { ChartConfig } from "./interfaces";

export const mockChartData: ChartConfig[] = [
  {
    type: "line",
    data: {
      labels: ["Oct 15", "Oct 16", "Oct 17", "Oct 18", "Oct 19", "Oct 20"],
      datasets: [
        {
          label: "data",
          data: [4600, 5400, 4200, 5700, 5324.032, 4800, 5100, 4500],
          borderColor: "#00A3FF",
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: "#00A3FF",
          pointHoverBackgroundColor: "#FFFFFF",
          pointHoverBorderColor: "#00A3FF",
        },
      ],
    },
    options: {
      scales: {
        xAxes: [{ ticks: { min: 0, max: 6000 } }],
        yAxes: [{ ticks: { min: 0, max: 6000 } }],
      },
    },
  },
  {
    type: "line",
    data: {
      labels: [
        "Oct 15",
        "Oct 16",
        "Oct 17",
        "Oct 18",
        "Oct 19",
        "Oct 20",
        "Oct 21",
        "Oct 22",
      ],
      datasets: [
        {
          label: "data",
          data: [
            3500, 5400, 4200, 6500, 5324.032, 4400, 5800, 4000, 5900, 7900,
          ],
          borderColor: "green",
          pointBackgroundColor: "blue",
          pointBorderColor: "#00A3FF",
          pointHoverBackgroundColor: "#FFFFFF",
          pointHoverBorderColor: "#00A3FF",
        },
      ],
    },
    options: {
      scales: {
        xAxes: [{ ticks: { min: 0, max: 8000 } }],
        yAxes: [{ ticks: { min: 0, max: 8000 } }],
      },
    },
  },
];

export const Names = {
  container: ".container",
  chart: "chart",
  classChart: ".chart",
  div: "div",
  canvas: "canvas",
  id: "id",
};
