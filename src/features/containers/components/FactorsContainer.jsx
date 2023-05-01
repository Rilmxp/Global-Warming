import Factor from "./Factor";
import { nanoid } from "nanoid";
import { contentData } from "../../../data/contentData";
import styles from "./FactorsContainer.module.scss";

const FactorsContainer = () => {
  return (
    <section className={styles.container}>
      {contentData.map((item) => {
        return <Factor key={nanoid()} content={item} />;
      })}
    </section>
  );
};

export default FactorsContainer;
