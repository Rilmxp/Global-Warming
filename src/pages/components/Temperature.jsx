import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { TemperatureChart } from "../../features/charts/index";
import { FactorHeading } from "../../features/layout/index";

const Temperature = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"Temperature"} cssClass={"temperature"} />

      <TemperatureChart />
    </MainTransitionAnimationWrapper>
  );
};

export default Temperature;
