import styles from "./FactorHeading.module.scss";

const FactorHeading = ({ title, cssClass }) => {
  return <h1 className={styles[cssClass]}>{title}</h1>;
};

export default FactorHeading;
