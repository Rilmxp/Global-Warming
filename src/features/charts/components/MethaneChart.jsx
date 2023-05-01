import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";

import styles from "./GraphsGlobal.module.scss";
import graphInlineStyles from "../../../styles/_exports.module.scss";

const MethaneChart = ({ graphData }) => {
  // css inline styles for tooltip
  const tooltipWrapperStyles = {
    border: graphInlineStyles.tooltipBorder,
    outline: graphInlineStyles.tooltipOutline,
    borderRadius: graphInlineStyles.tooltipRadius,
    borderColor: graphInlineStyles.colorMethane2,
  };

  const graph = (
    <ResponsiveContainer width="100%">
      <BarChart
        data={graphData}
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
              stopColor={graphInlineStyles.colorMethane1}
              stopOpacity={1}
            />
            <stop
              offset="95%"
              stopColor={graphInlineStyles.colorMethane2}
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
            value="CH4 in parts per million since 1983"
            offset={10}
            position="bottom"
          />
        </XAxis>
        <YAxis
          type="number"
          domain={["auto", "auto"]}
          interval="preserveStart"
        ></YAxis>
        <Tooltip
          wrapperStyle={tooltipWrapperStyles}
          contentStyle={{ border: "none", borderRadius: "inherit" }}
          itemStyle={{ color: graphInlineStyles.colorMethane1 }}
          cursor={false}
          formatter={(value) => [value, "Ppm"]}
          labelFormatter={(value) => `Year : ${value}`}
        />
        <Bar
          type="natural"
          dataKey="average"
          stroke={graphInlineStyles.colorMethane1}
          dot={false}
          strokeWidth={1.5}
          fillOpacity={1}
          fill="url(#colorMethane)"
        />
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <h4>Methane levels in the atmosphere</h4>
      <div className={styles.graph}>{graph}</div>
    </>
  );
};

export default MethaneChart;
