import { useQuery } from "@tanstack/react-query";
import { getGraphData } from "../../../api/graphDataApi";
import { motion } from "framer-motion";
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

import { Loader, ErrorMessage } from "../../ui/index.js";

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

  const tooltipStyles = {
    // backgroundColor: props.darkMode ? "#222222" : "#cccccc",
  };

  let content;

  // if (isLoading) {
  //   content = <Loader />;
  // }

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
      <ResponsiveContainer width="100%">
        <LineChart
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
            horizontal={true}
            strokeDasharray="1"
            stroke="lightgray"
          />
          <XAxis dataKey="time">
            <Label
              value="Period from 1880 to present"
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
            wrapperStyle={{
              outline: "none",
              border: "1.5px solid #f5af19",
              borderRadius: "5px",
            }}
            contentStyle={{ border: "none", borderRadius: "inherit" }}
            itemStyle={{ color: "#f12711" }}
            cursor={false}
            formatter={(value, name, props) => [value, "Celsius"]}
          />
          <Line
            type="natural"
            dataKey="land"
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={false}
            // activeDot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return (
    <section>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {graphData && (
        <motion.article
          className={styles.graphContainer}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <h4>Global temperature anomalies in Celsius</h4>
          <div className={styles.graph}>{content}</div>
        </motion.article>
      )}
    </section>
  );
};

export default TemperatureChart;
