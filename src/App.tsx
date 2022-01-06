export default function App() {
  return (
    <div className="App">
      <h1>Financial Charts with Sync function</h1>

      <ChartComponent>
        <Inject services={[HiloSeries]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective type="Hilo" name="Apple Inc"></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
