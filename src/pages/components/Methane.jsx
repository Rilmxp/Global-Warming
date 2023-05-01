import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { GraphContainer } from "../../features/charts";
import { FactsContainer } from "../../features/containers";
import { methaneDataHandler } from "../../api/graphDataResponseHandlers";

const Methane = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"methane"} cssClass={"methane"} />
      <GraphContainer
        apiParameter={"methane"}
        chart={"methane"}
        dataHandler={methaneDataHandler}
      />
      <FactsContainer factor={"methane"} />
    </MainTransitionAnimationWrapper>
  );
};

export default Methane;
