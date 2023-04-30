import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { Facts } from "../../features/containers";
import { GraphContainer } from "../../features/charts";
import { polarIceDataHandler } from "../../api/graphDataResponseHandlers";

const PolarIce = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"polar ice"} cssClass={"polarIce"} />
      <GraphContainer
        apiParameter={"arctic"}
        chart={"polarIce"}
        dataHandler={polarIceDataHandler}
      />
      <Facts factor={"polar ice"} />
    </MainTransitionAnimationWrapper>
  );
};

export default PolarIce;

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// import { MainTransitionAnimationWrapper } from "../../features/configuration";
// import { FactorHeading } from "../../features/layout";
// import { Facts } from "../../features/containers";
// import { PolarIceChart } from "../../features/charts";

// const PolarIce = () => {
//   return (
//     <MainTransitionAnimationWrapper>
//       <FactorHeading title={"polar ice"} cssClass={"polarIce"} />
//       <PolarIceChart />
//       <Facts factor={"polar ice"} />
//     </MainTransitionAnimationWrapper>
//   );
// };

// export default PolarIce;
