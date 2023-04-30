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
  // css inline styles fro tooltip
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
          formatter={(value, name, props) => [value, "Ppm"]}
          labelFormatter={(value, label, props) => `Year : ${value}`}
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

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// import { useQuery } from "@tanstack/react-query";
// import { getGraphData } from "../../../api/graphDataApiConfig";
// import { motion } from "framer-motion";
// import { Loader, ErrorMessage } from "../../ui/index.js";

// import {
//   ResponsiveContainer,
//   AreaChart,
//   Area,
//   Label,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// import styles from "./GraphsGlobal.module.scss";
// import graphInlineStyles from "../../../styles/_exports.module.scss";

// const CarbonDioxideChart = () => {
//   // css inline styles fro tooltip
//   const tooltipWrapperStyles = {
//     border: graphInlineStyles.tooltipBorder,
//     outline: graphInlineStyles.tooltipOutline,
//     borderRadius: graphInlineStyles.tooltipRadius,
//     borderColor: graphInlineStyles.colorCarbonDioxide2,
//   };

//   const { isLoading, isError, error, data } = useQuery({
//     queryKey: ["co2Cache"],
//     queryFn: () => getGraphData("co2"),
//   });

//   let content;

//   if (!isLoading && !isError) {
//     const graphData = data.co2;
//     const annualEmissions = graphData.filter((item) => {
//       return item.month === "1" && item.day === "20";
//     });

//     content = (
//       <ResponsiveContainer width="100%">
//         <AreaChart
//           data={annualEmissions}
//           margin={{
//             top: 0,
//             right: 55,
//             left: 0,
//             bottom: 25,
//           }}
//         >
//           <defs>
//             <linearGradient id="co2" x1="0" y1="0" x2="0" y2="1">
//               <stop
//                 offset="5%"
//                 stopColor={graphInlineStyles.colorCarbonDioxide1}
//                 stopOpacity={0.8}
//               />
//               <stop
//                 offset="95%"
//                 stopColor={graphInlineStyles.colorCarbonDioxide2}
//                 stopOpacity={0}
//               />
//             </linearGradient>
//           </defs>
//           <XAxis dataKey="year" domain={["2015", "auto"]}>
//             <Label
//               value="Concentrations of CO2 in parts per million"
//               offset={10}
//               position="bottom"
//             />
//           </XAxis>
//           <YAxis
//             dataKey="trend"
//             allowDecimals={false}
//             interval="preserveStart"
//             domain={["auto", "auto"]}
//             // ticksCount={10}
//             // ticks={["0", "390", "395", "400", "405"]}
//           />
//           <CartesianGrid
//             vertical={true}
//             horizontal={true}
//             strokeDasharray="1"
//             stroke="lightgray"
//           />
//           <Tooltip
//             wrapperStyle={tooltipWrapperStyles}
//             contentStyle={{ border: "none", borderRadius: "inherit" }}
//             itemStyle={{ color: graphInlineStyles.colorCarbonDioxide1 }}
//             cursor={false}
//             formatter={(value, name, props) => [value, "Ppm"]}
//             labelFormatter={(value, label, props) => `Year : ${value}`}
//           />
//           <Area
//             type="natural"
//             dataKey="trend"
//             stroke={graphInlineStyles.colorCarbonDioxide1}
//             strokeWidth={1.5}
//             fillOpacity={1}
//             fill="url(#co2)"
//           />
//         </AreaChart>
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
//           <h4>Carbon dioxide levels</h4>
//           <div className={styles.graph}>{content}</div>
//         </motion.article>
//       )}
//     </section>
//   );
// };

// export default CarbonDioxideChart;
