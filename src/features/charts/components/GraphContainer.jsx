import { useQuery } from "@tanstack/react-query";
import { getGraphData } from "../../../api/graphDataApiConfig";
import { motion } from "framer-motion";
import { Loader, ErrorMessage } from "../../ui/index.js";
import * as All from "../index.js";

import styles from "./GraphsGlobal.module.scss";

// PROPS:
// apiParameter: "temperature" || "co2" || "methane" || "nitrous-oxide" || "arctic"
//  factor: "temperature" || "carbonDioxide" || "methane" || "nitrousOxide" || "polarIce"
const GraphContainer = ({ apiParameter, chart, dataHandler }) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: [apiParameter],
    queryFn: () => getGraphData(apiParameter),
  });

  console.log("All", All);
  console.log("nitrousOxide", All["NitrousOxideChart"]);

  let chartToDisplay;

  if (!isLoading && !isError) {
    const graphData = dataHandler(data);

    let allCharts = Object.keys(All);
    console.log(chart.toLowerCase());
    chartToDisplay = allCharts.filter((item) =>
      item.toLowerCase().includes(chart.toLowerCase())
    );
    chartToDisplay = chartToDisplay[0];
    const FactorChartComponent = All[chartToDisplay];

    chartToDisplay = <FactorChartComponent graphData={graphData} />;
  }

  return (
    <section>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {chartToDisplay && (
        <motion.article
          className={styles.graphContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {chartToDisplay}
        </motion.article>
      )}
    </section>
  );
};

export default GraphContainer;
