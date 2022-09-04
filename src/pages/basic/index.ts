import CreateChart from "../../components/create-chart";
import { createElements } from "../../components/create-elements";
import { mockChartData, Names } from "../../shared/mock-data";

const createChart = new CreateChart();
export class Basic {
  render() {
    createElements(Names);
    createChart.run(mockChartData[0]);
  }
}

export default Basic;
