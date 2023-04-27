import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { Facts } from "../../features/containers";

const Methane = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"methane"} cssClass={"methane"} />
      <Facts factor={"methane"} />
    </MainTransitionAnimationWrapper>
  );
};

export default Methane;
