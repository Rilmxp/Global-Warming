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

const PolarIceChart = ({ graphData }) => {
  // css inline styles for tooltip
  const tooltipWrapperStyles = {
    border: graphInlineStyles.tooltipBorder,
    outline: graphInlineStyles.tooltipOutline,
    borderRadius: graphInlineStyles.tooltipRadius,
    borderColor: graphInlineStyles.colorPolarIce1,
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
        <YAxis domain={["auto", "auto"]}></YAxis>
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
          strokeWidth={1.5}
          dot={false}
          stroke={graphInlineStyles.colorPolarIce1}
          fillOpacity={1}
          fill="url(#colorPolarIce)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <h4>Arctic sea ice extent</h4>
      <div className={styles.graph}>{graph}</div>
    </>
  );
};

export default PolarIceChart;
