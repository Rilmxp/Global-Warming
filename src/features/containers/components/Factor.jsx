import styles from "./Factor.module.scss";
import Button from "../../ui/components/Button";
import { FactorHeading } from "../../layout";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Factor = ({ content }) => {
  const { title, textContent, link, dataSource, cssClass } = content;

  return (
    <motion.article
      className={styles.factorArticle}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <FactorHeading title={title} cssClass={cssClass} />
      <blockquote cite={dataSource}>{textContent}</blockquote>
      <Link className={styles.linkBtn} to={link}>
        <Button color={cssClass} />
      </Link>
    </motion.article>
  );
};

export default Factor;
