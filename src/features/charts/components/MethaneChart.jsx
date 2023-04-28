import styles from "./GraphsGlobal.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getGraphData } from "../../../api/graphDataApi";
import { color, motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";

import { Loader, ErrorMessage } from "../../ui/index.js";

import colorVariables from "../../../styles/_exports.module.scss";

const MethaneChart = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["methaneCache"],
    queryFn: () => getGraphData("methane"),
  });

  console.log(data);

  let content;

  if (!isLoading && !isError) {
    const graphData = data.methane;
    const annualEmissions = graphData.filter((item) => {
      return item.date.endsWith("12");
    });
    const finalData = annualEmissions.filter((item, index) => {
      if (index % 3 === 0 || index === annualEmissions.length - 1) {
        return item;
      }
    });
    console.log("annualEmissions", annualEmissions);
    console.log("finalData", finalData);

    content = (
      <ResponsiveContainer width="100%">
        <BarChart
          data={finalData}
          margin={{
            top: 5,
            right: 55,
            left: 0,
            bottom: 25,
          }}
        >
          <defs>
            <linearGradient id="colorMethane" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={colorVariables.colorMethane1}
                stopOpacity={1}
              />
              <stop
                offset="95%"
                stopColor={colorVariables.colorMethane2}
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
              value="Five-yearly data from 1984 to present"
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
              border: "1.4px solid #f5af19",
              borderRadius: "5px",
            }}
            contentStyle={{ border: "none", borderRadius: "inherit" }}
            itemStyle={{ color: "#f12711" }}
            cursor={false}
            formatter={(value, name, props) => [value, "Celsius"]}
          />
          <Bar
            type="natural"
            dataKey="average"
            stroke={colorVariables.colorMethane1}
            dot={false}
            // activeDot={{ r: 3 }}
            strokeWidth={1.5}
            fillOpacity={1}
            fill="url(#colorMethane)"
          />
        </BarChart>
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
          <h4>Methane levels in the atmosphere</h4>
          <div className={styles.graph}>{content}</div>
        </motion.article>
      )}
    </section>
  );
};

export default MethaneChart;
