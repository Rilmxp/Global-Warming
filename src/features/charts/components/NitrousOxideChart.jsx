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
  Label,
} from "recharts";

import graphInlineStyles from "../../../styles/_exports.module.scss";
import styles from "./GraphsGlobal.module.scss";

const NitrousxOxideChart = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["nitrousOxideCache"],
    queryFn: () => getGraphData("nitrous-oxide"),
  });

  const tooltipWrapperStyles = {
    // backgroundColor: props.darkMode ? "#222222" : "#cccccc",
    border: graphInlineStyles.tooltipBorder,
    outline: graphInlineStyles.tooltipOutline,
    borderRadius: graphInlineStyles.tooltipRadius,
    borderColor: graphInlineStyles.colorNitrousOxide2,
  };

  let content;

  if (!isLoading && !isError) {
    const graphData = data.nitrous;

    const annualEmissions = graphData.filter((item) => {
      return item.date.endsWith(".1");
    });

    console.log("graphData", graphData);
    console.log("annualEmissions", annualEmissions);

    const finalData = annualEmissions.map((item) => {
      let date;
      let average;

      date = parseInt(item.date);
      average = parseInt(item.average);

      return { date, average };
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
            <linearGradient id="colorNitrous" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={graphInlineStyles.colorNitrousOxide1}
                stopOpacity={1}
              />
              <stop
                offset="95%"
                stopColor={graphInlineStyles.colorNitrousOxide2}
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
          <XAxis dataKey="date">
            <Label
              value="Concentrations in parts per million"
              offset={10}
              position="bottom"
            />
          </XAxis>
          <YAxis
            type="number"
            domain={["auto", "auto"]}
            // domain={["dataMin - 3.11", "dataMax + 3"]}
            tickCount="4"
            // tickLine={false}
            // tickMargin="5"
          ></YAxis>
          <Tooltip
            wrapperStyle={tooltipWrapperStyles}
            contentStyle={{ border: "none", borderRadius: "inherit" }}
            itemStyle={{ color: graphInlineStyles.colorNitrousOxide2 }}
            cursor={true}
            formatter={(value) => [value, "ppm"]}
            labelFormatter={(value) => `Year : ${value}`}
          />
          <Area
            type="linear"
            dataKey="average"
            // strokeWidth={2}
            // dot={true}
            // activeDot={{ r: 3 }}
            stroke={graphInlineStyles.colorCarbonDioxide1}
            strokeWidth={1.5}
            fillOpacity={1}
            fill="url(#colorNitrous)"
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
          <h4>Nitrous oxide levels</h4>
          <div className={styles.graph}>{content}</div>
        </motion.article>
      )}
    </section>
  );
};

export default NitrousxOxideChart;
