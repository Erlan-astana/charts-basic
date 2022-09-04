import { Chart } from "chart.js";
import { ChartConfig } from "../shared/interfaces";

export class CreateChart {
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  run(chartConfig: ChartConfig) {
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    const gradient = this.ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(33, 33, 34, 0.2)");
    gradient.addColorStop(0.9, "rgba(0, 163, 255, 0.2)");

    const datasets = chartConfig.data.datasets[0];
    const data = {
      labels: chartConfig.data.labels,
      datasets: [
        {
          label: datasets.label,
          data: datasets.data,
          borderColor: datasets.borderColor,
          backgroundColor: gradient,
          pointBackgroundColor: datasets.pointBackgroundColor,
          pointBorderColor: datasets.pointBorderColor,
          pointHoverBackgroundColor: datasets.pointHoverBackgroundColor,
          pointHoverBorderColor: datasets.pointHoverBorderColor,
        },
      ],
    };

    const tooltipLine = {
      afterDraw: (chart: any) => {
        if (chart.tooltip?._active && chart.tooltip?._active?.length > 0) {
          let ctx = chart.ctx;
          ctx.save();
          const activePoint = chart.tooltip._active[0];
          ctx.beginPath();
          ctx.setLineDash([5, 7]);
          ctx.moveTo(activePoint._model.x, chart?.chartArea?.bottom);
          ctx.lineTo(activePoint._model.x, activePoint._model.y);
          ctx.moveTo(activePoint._model.x, chart?.chartArea?.top);
          ctx.lineTo(activePoint._model.x, activePoint._model.y);
          ctx.lineWidth = 2;
          ctx.strokeStyle = "grey";
          ctx.stroke();
          ctx.restore();
        }
      },
    };

    const chart = new Chart(this.ctx, {
      type: chartConfig.type,
      data: data,
      options: chartConfig.options,
      plugins: [tooltipLine],
    });
  }
}

export default CreateChart;
