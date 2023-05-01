import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { GraphContainer } from "../../features/charts";
import { FactsContainer } from "../../features/containers";
import { temperatureDataHandler } from "../../api/graphDataResponseHandlers";

const Temperature = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"temperature"} cssClass={"temperature"} />

      <GraphContainer
        apiParameter={"temperature"}
        chart={"temperature"}
        dataHandler={temperatureDataHandler}
      />
      <FactsContainer factor={"temperature"} />
    </MainTransitionAnimationWrapper>
  );
};

export default Temperature;
