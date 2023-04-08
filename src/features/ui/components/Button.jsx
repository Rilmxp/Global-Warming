import styles from "./Button.module.scss";

const Button = ({ color }) => {
  return <button className={`${styles[color]}`}>Find out More</button>;
};

export default Button;
