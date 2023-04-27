import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { Facts } from "../../features/containers";

const PolarIce = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"polar ice"} cssClass={"polarIce"} />

      <Facts factor={"polar ice"} />
    </MainTransitionAnimationWrapper>
  );
};

export default PolarIce;
