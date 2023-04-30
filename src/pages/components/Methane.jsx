import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { FactorHeading } from "../../features/layout";
import { Facts } from "../../features/containers";
import { GraphContainer } from "../../features/charts";
import { methaneDataHandler } from "../../api/graphDataResponseHandlers";

const Methane = () => {
  return (
    <MainTransitionAnimationWrapper>
      <FactorHeading title={"methane"} cssClass={"methane"} />
      <GraphContainer
        apiParameter={"methane"}
        chart={"methane"}
        dataHandler={methaneDataHandler}
      />
      <Facts factor={"methane"} />
    </MainTransitionAnimationWrapper>
  );
};

export default Methane;

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// import { MainTransitionAnimationWrapper } from "../../features/configuration";
// import { FactorHeading } from "../../features/layout";
// import { Facts } from "../../features/containers";
// import { MethaneChart } from "../../features/charts";

// const Methane = () => {
//   return (
//     <MainTransitionAnimationWrapper>
//       <FactorHeading title={"methane"} cssClass={"methane"} />
//       <MethaneChart />
//       <Facts factor={"methane"} />
//     </MainTransitionAnimationWrapper>
//   );
// };

// export default Methane;
