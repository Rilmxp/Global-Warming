import Factor from "./Factor";
import { contentData } from "../../../contentData";
import styles from "./FactorsContainer.module.scss";

const FactorsContainer = () => {
  return (
    <section className={styles.container}>
      {contentData.map((item, index) => {
        return <Factor key={index} content={item} />;
      })}
    </section>
  );
};

export default FactorsContainer;
