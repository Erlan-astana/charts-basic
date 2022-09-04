export interface ChartConfig {
  type: string;
  data: Data;
  options: Object;
  plugins?: Object;
}

export interface Data {
  labels?: string[];
  datasets: Datasets[];
}

export interface Datasets {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor?: string;
  pointBackgroundColor: string;
  pointBorderColor: string;
  pointHoverBackgroundColor: string;
  pointHoverBorderColor: string;
}

export interface Names {
  container: string;
  chart: string;
  classChart: string;
  div: string;
  canvas: string;
  id: string;
}
