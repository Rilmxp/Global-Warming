import { Banner } from "../../features/ui";
import FactorsContainer from "../../features/containers/components/FactorsContainer";
import { MainTransitionAnimationWrapper } from "../../features/configuration";

const Home = () => {
  return (
    <MainTransitionAnimationWrapper>
      <Banner />
      <FactorsContainer />
    </MainTransitionAnimationWrapper>
  );
};

export default Home;
