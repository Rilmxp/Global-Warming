import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { CarbonDioxideChart } from "../../features/charts";
import { Facts } from "../../features/containers";

const CarbonDioxide = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"carbon dioxide"} cssClass={"carbonDioxide"} />

      <CarbonDioxideChart />
      <Facts factor={"carbon dioxide"} />
    </MainTransitionAnimationWrapper>
  );
};

export default CarbonDioxide;
