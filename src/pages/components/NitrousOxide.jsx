import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { Facts } from "../../features/containers";
import { NitrousxOxideChart } from "../../features/charts";

const NitrousOxide = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"nitrous oxide"} cssClass={"nitrousOxide"} />
      <NitrousxOxideChart />
      <Facts factor={"nitrous oxide"} />
    </MainTransitionAnimationWrapper>
  );
};

export default NitrousOxide;
