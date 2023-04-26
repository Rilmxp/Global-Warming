import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { TemperatureChart } from "../../features/charts";
import { FactorHeading } from "../../features/layout";
import { Facts } from "../../features/containers";

const Temperature = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"temperature"} cssClass={"temperature"} />

      <TemperatureChart />
      <Facts factor={"temperature"} />
    </MainTransitionAnimationWrapper>
  );
};

export default Temperature;
