import styles from "./Button.module.scss";

const Button = ({ bgColor }) => {
  return <button className={`${styles[bgColor]}`}>Find out More</button>;
};

export default Button;
