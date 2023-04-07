import styles from "./Factor.module.scss";
import Button from "../../ui/components/Button";

const Factor = ({ content }) => {
  const { title, textContent, link, dataSource } = content;

  return (
    <section className={styles.factorSection}>
      <h1 className={styles[title]}>{title}</h1>
      <blockquote cite={dataSource}>{textContent}</blockquote>
      <a className={styles.linkBtn} href={link}>
        <Button bgColor={`${title}Btn`} />
      </a>
    </section>
  );
};

export default Factor;
