import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { TemperatureChart } from "../../features/charts";
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
