import { Loader, ErrorMessage } from "../../ui/index.js";
import { getGraphData } from "../../../api/graphDataApiConfig";
import * as All from "../index.js"; //imports all chart components.
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import styles from "./GraphsGlobal.module.scss";

/*
Component makes the call for a specific factor and renders the chart component
PROPS:
  - apiParameter: "temperature" || "co2" || "methane" || "nitrous-oxide" || "arctic"
  - chart: "temperature" || "carbonDioxide" || "methane" || "nitrousOxide" || "polarIce"
*/

const GraphContainer = ({ apiParameter, chart, dataHandler }) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: [apiParameter],
    queryFn: () => getGraphData(apiParameter),
  });

  let chartToDisplay;

  if (!isLoading && !isError) {
    const graphData = dataHandler(data);

    // find the specific chart inside all the charts imported from the charts folder.
    let allCharts = Object.keys(All);
    chartToDisplay = allCharts.filter((item) =>
      item.toLowerCase().includes(chart.toLowerCase())
    );

    // eg FactorChartComponent = <Temperature />
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
