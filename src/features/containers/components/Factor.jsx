import styles from "./Factor.module.scss";
import Button from "../../ui/components/Button";

import { motion } from "framer-motion";

const Factor = ({ content }) => {
  const { title, textContent, link, dataSource, cssClass } = content;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className={styles.factorSection}>
        <h1 className={styles[cssClass]}>{title}</h1>
        <blockquote cite={dataSource}>{textContent}</blockquote>
        <a className={styles.linkBtn} href={link}>
          <Button color={cssClass} />
        </a>
      </section>
    </motion.div>
  );
};

export default Factor;
