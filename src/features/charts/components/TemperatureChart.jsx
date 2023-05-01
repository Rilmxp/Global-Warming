import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";

import graphInlineStyles from "../../../styles/_exports.module.scss";
import styles from "./GraphsGlobal.module.scss";

const TemperatureChart = ({ graphData }) => {
  // css inline styles for tooltip
  const tooltipWrapperStyles = {
    border: graphInlineStyles.tooltipBorder,
    outline: graphInlineStyles.tooltipOutline,
    borderRadius: graphInlineStyles.tooltipRadius,
    borderColor: graphInlineStyles.colorTemperature1,
  };

  const graph = (
    <ResponsiveContainer width="100%">
      <LineChart
        data={graphData}
        margin={{
          top: 5,
          right: 55,
          left: 0,
          bottom: 25,
        }}
      >
        <defs>
          <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={graphInlineStyles.colorTemperature2}
              stopOpacity={1}
            />
            <stop
              offset="95%"
              stopColor={graphInlineStyles.colorTemperature1}
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
        <XAxis dataKey="time">
          <Label
            value="Warming rate from 1880 to present"
            offset={10}
            position="bottom"
          />
        </XAxis>
        <YAxis type="number" tickCount="4"></YAxis>
        <Tooltip
          wrapperStyle={tooltipWrapperStyles}
          contentStyle={{ border: "none", borderRadius: "inherit" }}
          itemStyle={{ color: graphInlineStyles.colorTemperature2 }}
          cursor={false}
          formatter={(value) => [value, "Celsius"]}
          labelFormatter={(value) => `Year : ${value}`}
        />
        <Line
          type="natural"
          dataKey="land"
          stroke="url(#colorTemp)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <h4>Global temperature anomalies in celsius</h4>
      <div className={styles.graph}>{graph}</div>
    </>
  );
};

export default TemperatureChart;
