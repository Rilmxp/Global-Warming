import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { Facts } from "../../features/containers";
import { MethaneChart } from "../../features/charts";

const Methane = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"methane"} cssClass={"methane"} />
      <MethaneChart />
      <Facts factor={"methane"} />
    </MainTransitionAnimationWrapper>
  );
};

export default Methane;
