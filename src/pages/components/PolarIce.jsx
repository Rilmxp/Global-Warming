import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { GraphContainer } from "../../features/charts";
import { FactsContainer } from "../../features/containers";
import { polarIceDataHandler } from "../../api/graphDataResponseHandlers";

const PolarIce = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"polar ice"} cssClass={"polarIce"} />
      <GraphContainer
        apiParameter={"arctic"}
        chart={"polarIce"}
        dataHandler={polarIceDataHandler}
      />
      <FactsContainer factor={"polar ice"} />
    </MainTransitionAnimationWrapper>
  );
};

export default PolarIce;
