import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { TemperatureChart } from "../../features/charts/index";

import styles from "../../features/containers/components/Factor.module.scss";

const Temperature = () => {
  return (
    <MainTransitionAnimationWrapper>
      <h1 className={styles.temperature}>Temperature</h1>
      <TemperatureChart />
    </MainTransitionAnimationWrapper>
  );
};

export default Temperature;
