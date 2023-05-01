import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import styles from "./GraphsGlobal.module.scss";
import graphInlineStyles from "../../../styles/_exports.module.scss";

const CarbonDioxideChart = ({ graphData }) => {
  // css inline styles for tooltip
  const tooltipWrapperStyles = {
    border: graphInlineStyles.tooltipBorder,
    outline: graphInlineStyles.tooltipOutline,
    borderRadius: graphInlineStyles.tooltipRadius,
    borderColor: graphInlineStyles.colorCarbonDioxide2,
  };

  const graph = (
    <ResponsiveContainer width="100%">
      <AreaChart
        data={graphData}
        margin={{
          top: 0,
          right: 55,
          left: 0,
          bottom: 25,
        }}
      >
        <defs>
          <linearGradient id="co2" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={graphInlineStyles.colorCarbonDioxide1}
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor={graphInlineStyles.colorCarbonDioxide2}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <XAxis dataKey="year" domain={["2015", "auto"]}>
          <Label
            value="Concentrations of CO2 in parts per million"
            offset={10}
            position="bottom"
          />
        </XAxis>
        <YAxis
          dataKey="trend"
          allowDecimals={false}
          interval="preserveStart"
          domain={["auto", "auto"]}
        />
        <CartesianGrid
          vertical={true}
          horizontal={true}
          strokeDasharray="1"
          stroke="lightgray"
        />
        <Tooltip
          wrapperStyle={tooltipWrapperStyles}
          contentStyle={{ border: "none", borderRadius: "inherit" }}
          itemStyle={{ color: graphInlineStyles.colorCarbonDioxide1 }}
          cursor={false}
          formatter={(value) => [value, "Ppm"]}
          labelFormatter={(value) => `Year : ${value}`}
        />
        <Area
          type="natural"
          dataKey="trend"
          stroke={graphInlineStyles.colorCarbonDioxide1}
          strokeWidth={1.5}
          fillOpacity={1}
          fill="url(#co2)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <h4>Carbon dioxide levels</h4>
      <div className={styles.graph}>{graph}</div>
    </>
  );
};

export default CarbonDioxideChart;
