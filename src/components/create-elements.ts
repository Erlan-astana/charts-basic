import { Names } from "../shared/interfaces";

function createElements(names: Names) {
  const currentPage = document.querySelector(names.classChart);
  if (currentPage) {
    currentPage.remove();
  }
  let container = document.querySelector(names.container) as HTMLElement;
  const chart = document.createElement(names.div);
  chart.classList.add(names.chart);
  const canvas = document.createElement(names.canvas);
  canvas.setAttribute(names.id, names.canvas);
  chart.append(canvas);
  container.append(chart);
}

export { createElements };
