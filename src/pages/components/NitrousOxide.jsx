import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { Facts } from "../../features/containers";
import { GraphContainer } from "../../features/charts";
import { nitrousOxideDataHandler } from "../../api/graphDataResponseHandlers";

const NitrousOxide = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"nitrous oxide"} cssClass={"nitrousOxide"} />
      <GraphContainer
        apiParameter={"nitrous-oxide"}
        chart={"nitrousOxide"}
        dataHandler={nitrousOxideDataHandler}
      />
      <Facts factor={"nitrous oxide"} />
    </MainTransitionAnimationWrapper>
  );
};

export default NitrousOxide;

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
// import { MainTransitionAnimationWrapper } from "../../features/configuration";
// import { FactorHeading } from "../../features/layout";
// import { Facts } from "../../features/containers";
// import { NitrousxOxideChart } from "../../features/charts";

// const NitrousOxide = () => {
//   return (
//     <MainTransitionAnimationWrapper>
//       <FactorHeading title={"nitrous oxide"} cssClass={"nitrousOxide"} />
//       <NitrousxOxideChart />
//       <Facts factor={"nitrous oxide"} />
//     </MainTransitionAnimationWrapper>
//   );
// };

// export default NitrousOxide;
