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
  // css inline styles fro tooltip
  const tooltipWrapperStyles = {
    // backgroundColor: props.darkMode ? "#222222" : "#cccccc",
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

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// import { useQuery } from "@tanstack/react-query";
// import { getGraphData } from "../../../api/graphDataApi";
// import { motion } from "framer-motion";
// import { Loader, ErrorMessage } from "../../ui/index.js";
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Label,
// } from "recharts";

// import graphInlineStyles from "../../../styles/_exports.module.scss";
// import styles from "./GraphsGlobal.module.scss";

// const TemperatureChart = () => {
//   const { isLoading, isError, error, data } = useQuery({
//     queryKey: ["temperatureCache"],
//     queryFn: () => getGraphData("temperature"),
//   });

//   // css inline styles fro tooltip
//   const tooltipWrapperStyles = {
//     // backgroundColor: props.darkMode ? "#222222" : "#cccccc",
//     border: graphInlineStyles.tooltipBorder,
//     outline: graphInlineStyles.tooltipOutline,
//     borderRadius: graphInlineStyles.tooltipRadius,
//     borderColor: graphInlineStyles.colorTemperature1,
//   };

//   let content;

//   if (!isLoading && !isError) {
//     const graphData = data.result;

//     const selectedYears = graphData.filter((item) => {
//       // separte year from month "1980.04" => "1980"
//       const year = +parseInt(item.time);

//       // select only january (.04) data from each year
//       if (item.time.endsWith(".04")) {
//         // select only 10-yearly data. from 1880 till 1980 and annually from 1981
//         if (year >= 1880 && year <= 1980 && +year % 10 === 0) return true;
//         if (year > 1980) return true;
//       }
//     });

//     // format year for correct display 1980.04 => 1980
//     const finalData = selectedYears.map((item) => {
//       let time = +parseInt(item.time);
//       return { ...item, time };
//     });

//     content = (
//       <ResponsiveContainer width="100%">
//         <LineChart
//           data={finalData}
//           margin={{
//             top: 5,
//             right: 55,
//             left: 0,
//             bottom: 25,
//           }}
//         >
//           <defs>
//             <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
//               <stop
//                 offset="5%"
//                 stopColor={graphInlineStyles.colorTemperature2}
//                 stopOpacity={1}
//               />
//               <stop
//                 offset="95%"
//                 stopColor={graphInlineStyles.colorTemperature1}
//                 stopOpacity={1}
//               />
//             </linearGradient>
//           </defs>
//           <CartesianGrid
//             vertical={false}
//             horizontal={true}
//             strokeDasharray="1"
//             stroke="lightgray"
//           />
//           <XAxis dataKey="time">
//             <Label
//               value="Warming rate from 1880 to present"
//               offset={10}
//               position="bottom"
//             />
//           </XAxis>
//           <YAxis
//             type="number"
//             // domain={["dataMin - 0.3"]}
//             tickCount="4"
//             // tickLine={false}
//             // tickMargin="5"
//           ></YAxis>
//           <Tooltip
//             wrapperStyle={tooltipWrapperStyles}
//             contentStyle={{ border: "none", borderRadius: "inherit" }}
//             itemStyle={{ color: graphInlineStyles.colorTemperature2 }}
//             cursor={false}
//             formatter={(value) => [value, "Celsius"]}
//             labelFormatter={(value) => `Year : ${value}`}
//           />
//           <Line
//             type="natural"
//             dataKey="land"
//             stroke="url(#colorTemp)"
//             strokeWidth={2}
//             dot={false}
//             // activeDot={{ r: 3 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     );
//   }

//   return (
//     <section>
//       {isLoading && <Loader />}
//       {isError && <ErrorMessage />}
//       {data && (
//         <motion.article
//           className={styles.graphContainer}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//         >
//           <h4>Global temperature anomalies in Celsius</h4>
//           <div className={styles.graph}>{content}</div>
//         </motion.article>
//       )}
//     </section>
//   );
// };

// export default TemperatureChart;
