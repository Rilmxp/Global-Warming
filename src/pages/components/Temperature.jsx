import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { TemperatureChart } from "../../features/charts";
import { Facts } from "../../features/containers";
import { GraphContainer } from "../../features/charts";
import { temperatureDataHandler } from "../../api/graphDataResponseHandlers";

const Temperature = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"temperature"} cssClass={"temperature"} />

      <GraphContainer
        apiParameter={"temperature"}
        chart={"temperature"}
        dataHandler={temperatureDataHandler}
      />
      <Facts factor={"temperature"} />
    </MainTransitionAnimationWrapper>
  );
};

export default Temperature;

///////////////////////////////////
///////////////////////////////////
// const Temperature = () => {
//   return (
//     <MainTransitionAnimationWrapper>
//       <FactorHeading title={"temperature"} cssClass={"temperature"} />

//       <TemperatureChart />
//       <Facts factor={"temperature"} />
//     </MainTransitionAnimationWrapper>
//   );
// };

// export default Temperature;
