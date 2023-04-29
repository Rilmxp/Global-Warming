import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { PageNotFound } from "../../features/layout";

const Error = () => {
  return (
    <MainTransitionAnimationWrapper>
      <PageNotFound />
    </MainTransitionAnimationWrapper>
  );
};

export default Error;
