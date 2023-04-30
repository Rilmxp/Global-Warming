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
  // css inline styles fro tooltip
  const tooltipWrapperStyles = {
    // backgroundColor: props.darkMode ? "#222222" : "#cccccc",
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
          formatter={(value, name, props) => [value, "Ppm"]}
          labelFormatter={(value, label, props) => `Year : ${value}`}
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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// import styles from "./GraphsGlobal.module.scss";
// import { useQuery } from "@tanstack/react-query";
// import { getGraphData } from "../../../api/graphDataApiConfig";
// import { color, motion } from "framer-motion";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Label,
// } from "recharts";

// import { Loader, ErrorMessage } from "../../ui/index.js";

// import graphInlineStyles from "../../../styles/_exports.module.scss";

// const MethaneChart = () => {
//   // css inline styles fro tooltip
//   const tooltipWrapperStyles = {
//     // backgroundColor: props.darkMode ? "#222222" : "#cccccc",
//     border: graphInlineStyles.tooltipBorder,
//     outline: graphInlineStyles.tooltipOutline,
//     borderRadius: graphInlineStyles.tooltipRadius,
//     borderColor: graphInlineStyles.colorMethane2,
//   };

//   const { isLoading, isError, error, data } = useQuery({
//     queryKey: ["methaneCache"],
//     queryFn: () => getGraphData("methane"),
//   });

//   console.log(data);

//   let content;

//   if (!isLoading && !isError) {
//     const graphData = data.methane;
//     // get only the month of december eg 1984.12
//     const annualEmissions = graphData.filter((item) => {
//       return item.date.endsWith("12");
//     });
//     // get only ranges of 3 years time + last available year.
//     const threeYearlyData = annualEmissions.filter((item, index) => {
//       if (index % 3 === 0 || index === annualEmissions.length - 1) {
//         return item;
//       }
//     });

//     const finalData = threeYearlyData.map((item) => {
//       let date;
//       let average;

//       date = parseInt(item.date);
//       average = parseInt(item.average);

//       return { date, average };
//     });

//     content = (
//       <ResponsiveContainer width="100%">
//         <BarChart
//           data={finalData}
//           margin={{
//             top: 5,
//             right: 55,
//             left: 0,
//             bottom: 25,
//           }}
//         >
//           <defs>
//             <linearGradient id="colorMethane" x1="0" y1="0" x2="0" y2="1">
//               <stop
//                 offset="5%"
//                 stopColor={graphInlineStyles.colorMethane1}
//                 stopOpacity={1}
//               />
//               <stop
//                 offset="95%"
//                 stopColor={graphInlineStyles.colorMethane2}
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
//           <XAxis dataKey="date">
//             <Label
//               value="CH4 in parts per million since 1983"
//               offset={10}
//               position="bottom"
//             />
//           </XAxis>
//           <YAxis
//             type="number"
//             domain={["auto", "auto"]}
//             interval="preserveStart"
//           ></YAxis>
//           <Tooltip
//             wrapperStyle={tooltipWrapperStyles}
//             contentStyle={{ border: "none", borderRadius: "inherit" }}
//             itemStyle={{ color: graphInlineStyles.colorMethane1 }}
//             cursor={false}
//             formatter={(value, name, props) => [value, "Ppm"]}
//             labelFormatter={(value, label, props) => `Year : ${value}`}
//           />
//           <Bar
//             type="natural"
//             dataKey="average"
//             stroke={graphInlineStyles.colorMethane1}
//             dot={false}
//             // activeDot={{ r: 3 }}
//             strokeWidth={1.5}
//             fillOpacity={1}
//             fill="url(#colorMethane)"
//           />
//         </BarChart>
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
//           <h4>Methane levels in the atmosphere</h4>
//           <div className={styles.graph}>{content}</div>
//         </motion.article>
//       )}
//     </section>
//   );
// };

// export default MethaneChart;
