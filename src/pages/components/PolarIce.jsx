import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { Facts } from "../../features/containers";
import { PolarIceChart } from "../../features/charts";

const PolarIce = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"polar ice"} cssClass={"polarIce"} />
      <PolarIceChart />
      <Facts factor={"polar ice"} />
    </MainTransitionAnimationWrapper>
  );
};

export default PolarIce;
