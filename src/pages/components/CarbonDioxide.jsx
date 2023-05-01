import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { FactsContainer } from "../../features/containers";
import { GraphContainer } from "../../features/charts";
import { carbonDioxideDataHandler } from "../../api/graphDataResponseHandlers";

const CarbonDioxide = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"carbon dioxide"} cssClass={"carbonDioxide"} />

      <GraphContainer
        apiParameter={"co2"}
        chart={"carbonDioxide"}
        dataHandler={carbonDioxideDataHandler}
      />
      <FactsContainer factor={"carbon dioxide"} />
    </MainTransitionAnimationWrapper>
  );
};

export default CarbonDioxide;
