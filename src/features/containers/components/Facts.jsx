import { nanoid } from "nanoid";
import { contentData } from "../../../data/contentData";

import Fact from "./Fact";

import styles from "./Facts.module.scss";

const Facts = ({ factor }) => {
  const factorFound = contentData.find((item) => item.title === factor);
  const facts = factorFound.facts;

  return (
    <section className={styles.factsArticles}>
      {facts.map((item) => {
        return (
          <Fact fact={item.fact} listItems={item.factsList} key={nanoid()} />
        );
      })}
    </section>
  );
};

export default Facts;
