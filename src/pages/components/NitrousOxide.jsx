import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { Facts } from "../../features/containers";

const NitrousOxide = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"nitrous oxide"} cssClass={"nitrousOxide"} />
      <Facts factor={"nitrous oxide"} />
    </MainTransitionAnimationWrapper>
  );
};

export default NitrousOxide;
