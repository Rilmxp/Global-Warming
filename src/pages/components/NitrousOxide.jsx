import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { FactsContainer } from "../../features/containers";
import { GraphContainer } from "../../features/charts";
import { nitrousOxideDataHandler } from "../../api/graphDataResponseHandlers";

const NitrousOxide = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"nitrous oxide"} cssClass={"nitrousOxide"} />
      <GraphContainer
        apiParameter={"nitrous-oxide"}
        chart={"nitrousOxide"}
        dataHandler={nitrousOxideDataHandler}
      />
      <FactsContainer factor={"nitrous oxide"} />
    </MainTransitionAnimationWrapper>
  );
};

export default NitrousOxide;
