import {
  GiMagnifyingGlass,
  GiThermometerHot,
  GiLightBulb,
} from "react-icons/gi";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";
import styles from "./Fact.module.scss";

const Fact = ({ fact, listItems, cssClass }) => {
  // motion framer animation
  const variants = {
    visible: {
      opacity: 1,
      x: "0%",
      transition: { duration: 2, type: "spring", delay: 0.1 },
    },
    hidden: { opacity: 0, x: "-100%" },
  };

  // bind each icon to its fact
  let iconToDisplay = null;
  switch (fact) {
    case "causes":
      iconToDisplay = <GiMagnifyingGlass className={styles.factsIcon} />;
      break;
    case "effects":
      iconToDisplay = <GiThermometerHot className={styles.factsIcon} />;
      break;
    case "what you can do":
      iconToDisplay = <GiLightBulb className={styles.factsIcon} />;
      break;
  }

  return (
    <motion.article
      className={styles.graphContainer}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h4 className={styles[cssClass]}>{fact}</h4>
      <ul className={styles.factsList}>
        {listItems.map((item) => {
          return (
            <li key={nanoid()}>
              {iconToDisplay}
              {item}
            </li>
          );
        })}
      </ul>
    </motion.article>
  );
};

export default Fact;
