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

const NitrousxOxideChart = ({ graphData }) => {
  // css inline styles for tooltip
  const tooltipWrapperStyles = {
    border: graphInlineStyles.tooltipBorder,
    outline: graphInlineStyles.tooltipOutline,
    borderRadius: graphInlineStyles.tooltipRadius,
    borderColor: graphInlineStyles.colorNitrousOxide2,
  };

  const graph = (
    <ResponsiveContainer width="100%">
      <AreaChart
        data={graphData}
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
            value="N2O concentrations in parts per million"
            offset={10}
            position="bottom"
          />
        </XAxis>
        <YAxis type="number" domain={["auto", "auto"]} tickCount="4"></YAxis>
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
          stroke={graphInlineStyles.colorCarbonDioxide1}
          strokeWidth={1.5}
          fillOpacity={1}
          fill="url(#colorNitrous)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <h4>Nitrous oxide levels</h4>
      <div className={styles.graph}>{graph}</div>
    </>
  );
};

export default NitrousxOxideChart;
