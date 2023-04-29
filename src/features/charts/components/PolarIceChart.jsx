import { useQuery } from "@tanstack/react-query";
import { getGraphData } from "../../../api/graphDataApi";
import { motion } from "framer-motion";
import { Loader, ErrorMessage } from "../../ui/index.js";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";

import graphInlineStyles from "../../../styles/_exports.module.scss";
import styles from "./GraphsGlobal.module.scss";

const PolarIceChart = () => {
  // css inline styles fro tooltip
  const tooltipWrapperStyles = {
    // backgroundColor: props.darkMode ? "#222222" : "#cccccc",
    border: graphInlineStyles.tooltipBorder,
    outline: graphInlineStyles.tooltipOutline,
    borderRadius: graphInlineStyles.tooltipRadius,
    borderColor: graphInlineStyles.colorPolarIce1,
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["arcticCache"],
    queryFn: () => getGraphData("arctic"),
  });

  let content;

  if (!isLoading && !isError) {
    const graphData = data.arcticData;
    console.log("graphData", graphData);

    const finalData = graphData.map((item) => {
      let extent = item.extent.toFixed(2);
      return { ...item, extent };
      console.log("roundedValue", roundedValue);
    });

    content = (
      <ResponsiveContainer width="100%">
        <AreaChart
          data={finalData}
          margin={{
            top: 5,
            right: 55,
            left: 0,
            bottom: 25,
          }}
        >
          <defs>
            <linearGradient id="colorPolarIce" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={graphInlineStyles.colorPolarIce2}
                stopOpacity={1}
              />
              <stop
                offset="95%"
                stopColor={graphInlineStyles.colorPolarIce1}
                stopOpacity={1}
              />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            horizontal={true}
            strokeDasharray="1"
            stroke="lightgray"
          />
          <XAxis dataKey="year">
            <Label
              value="Sea ice extent per million square km"
              offset={10}
              position="bottom"
            />
          </XAxis>
          <YAxis
            // type="number"
            domain={["auto", "auto"]}
            // tickCount="4"
            // tickLine={false}
            // tickMargin="5"
          ></YAxis>
          <Tooltip
            wrapperStyle={tooltipWrapperStyles}
            contentStyle={{ border: "none", borderRadius: "inherit" }}
            itemStyle={{ color: graphInlineStyles.colorPolarIce1 }}
            cursor={false}
            formatter={(value) => [value, "Mkm²"]}
            labelFormatter={(value) => `Year : ${value}`}
          />
          <Area
            type="step"
            dataKey="extent"
            // stroke="url(#colorPolarIce)"
            strokeWidth={1.5}
            dot={false}
            // activeDot={{ r: 3 }}
            stroke={graphInlineStyles.colorPolarIce1}
            fillOpacity={1}
            fill="url(#colorPolarIce)"
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
          <h4>Arctic sea ice extent</h4>
          <div className={styles.graph}>{content}</div>
        </motion.article>
      )}
    </section>
  );
};

export default PolarIceChart;
