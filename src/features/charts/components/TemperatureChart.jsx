import { useQuery } from "@tanstack/react-query";
import { getGraphData } from "../../../api/graphDataApi";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
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
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          // width={300}
          // height={500}
          data={finalData}
          margin={{
            top: 5,
            right: 55,
            left: 0,
            bottom: 25,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f12711" stopOpacity={1} />
              <stop offset="95%" stopColor="#f5af19" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            horizontal={false}
            strokeDasharray="1"
            stroke="black"
          />
          <XAxis dataKey="time">
            <Label
              value="Period from 1980 to present"
              offset={10}
              position="bottom"
            />
          </XAxis>
          <YAxis
            type="number"
            domain={["dataMin - 0.3"]}
            tickCount="4"
            // tickLine={false}
            // tickMargin="5"
          ></YAxis>
          <Tooltip
            wrapperStyle={{ border: "1px solid blue" }}
            contentStyle={{ backgroundColor: "lightblue" }}
            itemStyle={{ color: "blue" }}
            cursor={false}
          />
          {/* <Legend /> */}
          <Line
            type="linear"
            dataKey="land"
            stroke="url(#colorUv)"
            strokeWidth={1.5}
            dot={false}
            // activeDot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return (
    <section className={styles.graphContainer}>
      <h4>Global temperature anomalies in Celsius</h4>

      <div className={styles.graph}>{content}</div>
    </section>
  );
};

export default TemperatureChart;
