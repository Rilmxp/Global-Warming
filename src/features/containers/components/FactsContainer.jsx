import Fact from "./Fact";
import { nanoid } from "nanoid";
import { contentData } from "../../../data/contentData";
import styles from "./FactsContainer.module.scss";

const Facts = ({ factor }) => {
  const factorFound = contentData.find((item) => item.title === factor);
  const facts = factorFound.facts;

  return (
    <section className={styles.factsArticles}>
      {facts.map((item) => {
        return (
          <Fact
            fact={item.fact}
            listItems={item.factsList}
            key={nanoid()}
            cssClass={factorFound.cssClass}
          />
        );
      })}
    </section>
  );
};

export default Facts;
