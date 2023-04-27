import { useQuery } from "@tanstack/react-query";
import { getGraphData } from "../../../api/graphDataApi";
import { motion } from "framer-motion";
import { Loader, ErrorMessage } from "../../ui/index.js";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import styles from "./CarbonDioxideChart.module.scss";

const CarbonDioxideChart = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["co2Cache"],
    queryFn: () => getGraphData("co2"),
  });

  let content;

  if (!isLoading && !isError) {
    const graphData = data.co2;
    console.log(graphData);
    const annualEmissions = graphData.filter((item) => {
      return item.month === "1" && item.day === "20";
    });

    console.log(annualEmissions);

    content = (
      <ResponsiveContainer width="100%">
        <AreaChart
          data={annualEmissions}
          margin={{
            top: 0,
            right: 55,
            left: 0,
            bottom: 25,
          }}
        >
          <defs>
            <linearGradient id="co2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3f4c6b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#606c88" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="year">
            <Label
              value="Concentrations of CO2 in parts per million"
              offset={10}
              position="bottom"
            />
          </XAxis>
          <YAxis dataKey="trend" />
          <CartesianGrid
            vertical={true}
            horizontal={true}
            strokeDasharray="1"
            stroke="lightgray"
          />
          <Tooltip
            wrapperStyle={{
              outline: "none",
              border: "1.4px solid #606c88",
              borderRadius: "5px",
            }}
            contentStyle={{ border: "none", borderRadius: "inherit" }}
            itemStyle={{ color: "#3f4c6b" }}
            cursor={false}
            formatter={(value, name, props) => [value, "ppm"]}
          />
          <Area
            type="natural"
            dataKey="trend"
            stroke="#3f4c6b"
            strokeWidth={1.5}
            fillOpacity={1}
            fill="url(#co2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  return (
    <section>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {data && (
        <motion.article
          className={styles.graphContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <h4>Carbon dioxide levels</h4>
          <div className={styles.graph}>{content}</div>
        </motion.article>
      )}
    </section>
  );
};

export default CarbonDioxideChart;
