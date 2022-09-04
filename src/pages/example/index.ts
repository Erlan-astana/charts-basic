import CreateChart from "../../components/create-chart";
import { createElements } from "../../components/create-elements";
import { mockChartData, Names } from "../../shared/mock-data";

const createChart = new CreateChart();
export class Example {
  render() {
    createElements(Names);
    createChart.run(mockChartData[1]);
  }
}

export default Example;
