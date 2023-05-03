import Button from "../../ui/components/Button";
import { FactorHeading } from "../../layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Factor.module.scss";

// Each Factor has its own specific content and gradient-color (content.cssClass prop) received from src/data/contentData.js

const Factor = ({ content }) => {
  const {
    title,
    introSummary,
    link,
    dataSource,
    cssClass,
    image: { small, big, alt },
  } = content;

  return (
    <motion.article
      className={styles.factorArticle}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <img
        className={styles.factorImg}
        srcSet={`/images/${small} 700w, /images/${big} 1920w`}
        src={`/images/${small}`}
        alt={alt}
      ></img>
      <div className={styles.textContent}>
        <FactorHeading title={title} cssClass={cssClass} />
        <blockquote cite={dataSource}>{introSummary}</blockquote>
        <Link className={styles.linkBtn} to={link}>
          <Button color={cssClass} />
        </Link>
      </div>
    </motion.article>
  );
};

export default Factor;

// import Button from "../../ui/components/Button";
// import { FactorHeading } from "../../layout";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import styles from "./Factor.module.scss";

// // Each Factor has its own specific content and gradient-color (content.cssClass prop) received from src/data/contentData.js

// const Factor = ({ content }) => {
//   const { title, introSummary, link, dataSource, cssClass } = content;

//   return (
//     <motion.article
//       className={styles.factorArticle}
//       initial={{ opacity: 0, scale: 0.5 }}
//       transition={{ duration: 0.5 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//     >
//       <FactorHeading title={title} cssClass={cssClass} />
//       <blockquote cite={dataSource}>{introSummary}</blockquote>
//       <Link className={styles.linkBtn} to={link}>
//         <Button color={cssClass} />
//       </Link>
//     </motion.article>
//   );
// };

// export default Factor;
