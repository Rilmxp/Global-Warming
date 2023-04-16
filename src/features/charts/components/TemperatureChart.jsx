import { useQuery } from "@tanstack/react-query";
import { getGraphData } from "../../../api/graphDataApi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import styles from "./TemperatureChart.module.scss";

const TemperatureChart = () => {
  const {
    isLoading,
    isError,
    error, // if theres an error it will return the error
    data: graphData,
  } = useQuery({
    queryKey: ["temperatureCache"],
    queryFn: () => getGraphData("temperature"),
  });

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = <p>Graph data not available. Please try again later</p>;
  }

  if (!isLoading && !isError) {
    // filter specific year ranges to display
    const selectedYears = graphData.filter((item) => {
      let year = parseInt(item.time);
      let month;

      // separate month (eg. 4 = january) from year (1980) 1980.04
      let decimalPartOfYear = item.time.indexOf(".");
      month = item.time.substring(decimalPartOfYear + 1);
      // get only data from january each year
      if (+month == 4) {
        // from 1880 - 1980 get only 1 value per decade
        if (+year >= 1880 && +year <= 1980 && +year % 10 === 0) return true;
        // from 1980 get 1 value per year
        if (+year > 1980 && +month === 4) return true;
      }
    });

    // format year for correct display 1980.04 => 1980
    const finalData = selectedYears.map((item) => {
      let time = +parseInt(item.time);
      return { ...item, time };
    });
    content = (
      <LineChart
        width={340}
        height={300}
        data={finalData}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={["dataMin - 0.3", "dataMax + 0.1"]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="land" stroke="#f12711" dot={false} />
      </LineChart>
    );
  }

  return (
    <section className={styles.graphContainer}>
      <h3>Global temperature anomalies from 1980 to present</h3>

      <div className={styles.graph}>{content}</div>
    </section>
  );
};

export default TemperatureChart;