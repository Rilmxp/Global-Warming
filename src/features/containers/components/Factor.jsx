import styles from "./Factor.module.scss";
import Button from "../../ui/components/Button";

const Factor = ({ content }) => {
  const { title, textContent, link, dataSource, cssClass } = content;

  return (
    <section className={styles.factorSection}>
      <h1 className={styles[cssClass]}>{title}</h1>
      <blockquote cite={dataSource}>{textContent}</blockquote>
      <a className={styles.linkBtn} href={link}>
        <Button color={cssClass} />
      </a>
    </section>
  );
};

export default Factor;
