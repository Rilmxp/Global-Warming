import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { CarbonDioxideChart } from "../../features/charts";
import { Facts } from "../../features/containers";
import { GraphContainer } from "../../features/charts";
import { carbonDioxideDataHandler } from "../../api/graphDataResponseHandlers";

const CarbonDioxide = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"carbon dioxide"} cssClass={"carbonDioxide"} />

      <GraphContainer
        apiParameter={"co2"}
        chart={"carbonDioxide"}
        dataHandler={carbonDioxideDataHandler}
      />
      <Facts factor={"carbon dioxide"} />
    </MainTransitionAnimationWrapper>
  );
};

export default CarbonDioxide;

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// import { MainTransitionAnimationWrapper } from "../../features/configuration";
// import { FactorHeading } from "../../features/layout";
// import { CarbonDioxideChart } from "../../features/charts";
// import { Facts } from "../../features/containers";
// import { GraphContainer } from "../../features/charts";
// import { temperatureDataHandler } from "../../api/graphDataHandlers";

// const CarbonDioxide = () => {
//   return (
//     <MainTransitionAnimationWrapper>
//       <FactorHeading title={"carbon dioxide"} cssClass={"carbonDioxide"} />

//       <CarbonDioxideChart />
//       <Facts factor={"carbon dioxide"} />
//     </MainTransitionAnimationWrapper>
//   );
// };

// export default CarbonDioxide;
