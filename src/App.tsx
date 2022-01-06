import React from "react";
import "./styles.css";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  HiloSeries,
  Inject,
  DateTime,
  Tooltip,
  Crosshair
} from "@syncfusion/ej2-react-charts";
import { chartData } from "./data";

export default function App() {
  return (
    <div className="App">
      <h1>Financial Charts with Sync function</h1>
      <ChartComponent
        title="AAPL Historical"
        primaryXAxis={{ valueType: "DateTime" }}
        primaryYAxis={{ title: "Price" }}
        tooltip={{ enable: true }}
      >
        <Inject services={[HiloSeries, DateTime, Tooltip]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective
            type="Hilo"
            name="Apple Inc"
            dataSource={chartData}
            xName="date"
            high="high"
            low="low"
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
